import Reveal from "./Reveal";
import s from "./Sections.module.css";

/**
 * ATO 05 — PROJETOS (Parte 11)
 *
 * Objetivo: prova. "Isso existe."
 *
 * INTEGRIDADE: todo projeto listado aqui foi verificado no ar (HTTP 200) antes
 * de entrar. Nenhum case fictício, nenhum mockup inventado, nenhum número de
 * resultado que não possa ser comprovado.
 */
const projetos = [
  {
    nome: "AvePro",
    categoria: "Plataforma SaaS",
    desc: "Gestão profissional de criatórios: plantel, reprodução, financeiro e marketplace em um só lugar.",
    tags: ["Node.js", "PostgreSQL", "Marketplace", "Multi-módulo"],
    url: "https://avepro.com.br",
    status: "Em produção",
    cor: "#FF6B6B",
  },
  {
    nome: "AKITEM",
    categoria: "Marketplace",
    desc: "Conecta quem precisa de um serviço a quem presta, com busca por categoria e localização.",
    tags: ["Node.js", "PostgreSQL", "Geolocalização"],
    url: "https://precisouaquitem.com.br",
    status: "Em produção",
    cor: "#4D9DE0",
  },
  {
    nome: "Elite Soluções Cred",
    categoria: "CRM e operações",
    desc: "Gestão comercial de crédito consignado: clientes, contratos, parceiros e comissões.",
    tags: ["Node.js", "PostgreSQL", "CRM"],
    url: "https://elitesolucoescred.com.br",
    status: "Em produção",
    cor: "#D4A017",
  },
  {
    nome: "Complexo-X",
    categoria: "Plataforma de IA",
    desc: "Ambiente que conecta agentes inteligentes, automações e fluxos de produção contínua.",
    tags: ["IA", "Agentes", "Automação"],
    url: "https://complexo-x.com.br",
    status: "Em produção",
    cor: "#7B5CFF",
  },
  {
    nome: "Recanto das Calopsitas",
    categoria: "Presença digital",
    desc: "Site institucional e presença digital completa para criatório especializado.",
    tags: ["Institucional", "SEO"],
    url: "https://recantodascalopsitas.com.br",
    status: "Em produção",
    cor: "#2ECC71",
  },
  {
    nome: "LDCODE",
    categoria: "Engenharia",
    desc: "A holding de tecnologia onde nascem as plataformas, os agentes e a arquitetura do ecossistema.",
    tags: ["Arquitetura", "Plataformas", "Infraestrutura"],
    url: "https://ldcodepro.com.br",
    status: "Em produção",
    cor: "#00A9DE",
  },
];

export default function AtoProjetos() {
  return (
    <section className="section" id="projetos" aria-labelledby="proj-titulo">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Projetos</p>
          <h2 id="proj-titulo" className={s.h2wide}>
            Tecnologia construída. Não apenas apresentada.
          </h2>
          <p className="lead">
            Não mostramos promessas. Mostramos aquilo que desenvolvemos — e que
            está no ar agora.
          </p>
        </Reveal>

        <div className={`${s.grid} ${s.g3} ${s.gridQuadrado}`}>
          {projetos.map((p, i) => (
            <Reveal key={p.nome} delay={i * 70}>
              <article
                className={`${s.card} ${s.projeto}`}
                data-spotlight
                style={{ ["--tom" as string]: p.cor }}
              >
                <div className={s.projTopo}>
                  <h3 className={s.cardTitle}>{p.nome}</h3>
                  <span className={s.projStatus}>{p.status}</span>
                </div>
                <p className="eyebrow" style={{ margin: 0 }}>
                  {p.categoria}
                </p>
                <p className={s.cardText} style={{ marginTop: 0 }}>
                  {p.desc}
                </p>
                <div className={s.tags}>
                  {p.tags.map((t) => (
                    <span key={t} className={s.tag}>
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    marginTop: "var(--space-4)",
                    paddingTop: "var(--space-2)",
                    display: "inline-flex",
                    alignItems: "center",
                    color: "var(--aonda-blue)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  Conhecer projeto →
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
