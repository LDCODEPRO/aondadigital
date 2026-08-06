import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-dynamic";

const DATA_DIR = process.env.AONDA_DATA_DIR ?? "/opt/apps/aonda/data";
const LEADS = path.join(DATA_DIR, "leads.jsonl");

/** Limite simples em memória: 5 envios por IP a cada 10 minutos. */
const janela = new Map<string, number[]>();
const LIMITE = 5;
const JANELA_MS = 10 * 60 * 1000;

function excedeuLimite(ip: string) {
  const agora = Date.now();
  const anteriores = (janela.get(ip) ?? []).filter((t) => agora - t < JANELA_MS);
  anteriores.push(agora);
  janela.set(ip, anteriores);
  return anteriores.length > LIMITE;
}

function limpa(v: unknown, max: number) {
  return typeof v === "string" ? v.trim().slice(0, max) : "";
}

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconhecido";

  if (excedeuLimite(ip)) {
    return NextResponse.json(
      { ok: false, erro: "Muitas tentativas. Tente novamente em alguns minutos." },
      { status: 429 }
    );
  }

  let corpo: Record<string, unknown>;
  try {
    corpo = await req.json();
  } catch {
    return NextResponse.json({ ok: false, erro: "Requisição inválida." }, { status: 400 });
  }

  // Honeypot: campo invisível ao humano. Se veio preenchido, é bot.
  if (limpa(corpo.website, 100)) {
    return NextResponse.json({ ok: true });
  }

  const nome = limpa(corpo.nome, 120);
  const contato = limpa(corpo.contato, 160);
  const empresa = limpa(corpo.empresa, 160);
  const mensagem = limpa(corpo.mensagem, 2000);

  if (nome.length < 2) {
    return NextResponse.json({ ok: false, erro: "Informe seu nome." }, { status: 400 });
  }
  if (contato.length < 5) {
    return NextResponse.json(
      { ok: false, erro: "Informe um e-mail ou WhatsApp para retorno." },
      { status: 400 }
    );
  }

  const lead = {
    id: crypto.randomUUID(),
    recebido_em: new Date().toISOString(),
    origem: "aonda-landing",
    nome,
    contato,
    empresa,
    mensagem,
    ip,
    user_agent: req.headers.get("user-agent")?.slice(0, 200) ?? "",
  };

  try {
    await mkdir(DATA_DIR, { recursive: true });
    await appendFile(LEADS, JSON.stringify(lead) + "\n", "utf8");
  } catch (e) {
    console.error("[lead] falha ao gravar:", e);
    return NextResponse.json(
      { ok: false, erro: "Não conseguimos registrar agora. Tente novamente." },
      { status: 500 }
    );
  }

  // Disparo via API Oficial Meta WhatsApp (Cloud API Graph)
  const token = process.env.META_WA_TOKEN;
  const phoneId = process.env.META_WA_PHONE_ID;
  const recipient = process.env.META_WA_RECIPIENT || "5511999999999";

  if (token && phoneId) {
    try {
      const waMsg = `🌊 *NOVO ORÇAMENTO - A ONDA DIGITAL*\n\n👤 *Nome:* ${nome}\n📞 *Contato:* ${contato}\n🏢 *Empresa:* ${empresa || "Não informada"}\n💬 *Mensagem:* ${mensagem || "Nenhuma"}`;
      await fetch(`https://graph.facebook.com/v19.0/${phoneId}/messages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messaging_product: "whatsapp",
          to: recipient,
          type: "text",
          text: { body: waMsg },
        }),
      });
    } catch (waErr) {
      console.error("[whatsapp-meta] erro ao enviar:", waErr);
    }
  }

  return NextResponse.json({ ok: true, id: lead.id });
}
