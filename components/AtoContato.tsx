"use client";

import { useState } from "react";
import AondaSymbol from "./AondaSymbol";
import s from "./Sections.module.css";
import f from "./Contato.module.css";

type Estado = "parado" | "enviando" | "ok" | "erro";

/**
 * ATO 09 — CTA FINAL (Parte 04)
 *
 * O botão precisa fazer alguma coisa de verdade: um CTA que não registra nada
 * seria exatamente o "botão sem ação" proibido pela regra de integridade.
 * Este formulário grava o lead de fato via /api/lead.
 */
export default function AtoContato() {
  const [estado, setEstado] = useState<Estado>("parado");
  const [erro, setErro] = useState("");

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    setErro("");

    const dados = Object.fromEntries(new FormData(e.currentTarget));

    try {
      const r = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados),
      });
      const json = await r.json();
      if (!r.ok || !json.ok) throw new Error(json.erro ?? "Falha no envio.");
      setEstado("ok");
    } catch (err) {
      setErro(err instanceof Error ? err.message : "Falha no envio.");
      setEstado("erro");
    }
  }

  return (
    <section className="section" id="contato" aria-labelledby="cta-titulo">
      <div className="container">
        <div className={s.ctaFinal}>
          <AondaSymbol size={72} gradientId="ctaWave" />
          <h2 id="cta-titulo" className={s.ctaTitulo} style={{ marginTop: "var(--space-8)" }}>
            Você fala. Nós fazemos.
          </h2>
        </div>

        {estado === "ok" ? (
          <div className={f.sucesso} role="status">
            <p className={f.sucessoTitulo}>Recebemos sua mensagem.</p>
            <p className={s.cardText}>
              Vamos entrar em contato pelo canal que você informou.
            </p>
          </div>
        ) : (
          <form className={f.form} onSubmit={enviar} noValidate>
            {/* honeypot — invisível para humanos, atrativo para bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className={f.honeypot}
            />

            <div className={f.linha}>
              <label className={f.campo}>
                <span className={f.label}>Seu nome *</span>
                <input name="nome" required maxLength={120} className={f.input} />
              </label>
              <label className={f.campo}>
                <span className={f.label}>Sua empresa</span>
                <input name="empresa" maxLength={160} className={f.input} />
              </label>
            </div>

            <label className={f.campo}>
              <span className={f.label}>E-mail ou WhatsApp *</span>
              <input name="contato" required maxLength={160} className={f.input} />
            </label>

            <label className={f.campo}>
              <span className={f.label}>Conte rapidamente sobre sua empresa</span>
              <textarea name="mensagem" rows={4} maxLength={2000} className={f.input} />
            </label>

            {estado === "erro" && (
              <p className={f.erro} role="alert">
                {erro}
              </p>
            )}

            <button
              type="submit"
              className={`${s.btn} ${s.primary}`}
              disabled={estado === "enviando"}
            >
              {estado === "enviando" ? "ENVIANDO..." : "QUERO ENTRAR NA ONDA"}
            </button>

            <p className={f.aviso}>
              Sem formulário enorme. Sem burocracia. Só o necessário para conversarmos.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
