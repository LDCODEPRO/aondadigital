import Reveal from "./Reveal";
import s from "./Sections.module.css";

/**
 * ATO 08 — PLANOS (Parte 04)
 *
 * Somente dois. Sem tabela comparativa gigante, sem cinquenta recursos.
 *
 * INTEGRIDADE: nenhum preço é exibido porque nenhum preço foi definido pelo
 * Diretor. Inventar valor seria criar informação falsa em página pública.
 * O escopo de cada plano precisa de confirmação antes de virar compromisso
 * comercial — está aqui como estrutura, não como oferta fechada.
 */
const planos = [
  {
    nome: "Essencial",
    para: "Para empresas que querem construir uma presença digital profissional do zero.",
    itens: [
      "Identidade visual",
      "Website institucional",
      "Google Meu Negócio",
      "WhatsApp Business organizado",
      "Otimização para busca",
    ],
    destaque: false,
  },
  {
    nome: "Growth",
    para: "Para empresas que querem acelerar usando todo o ecossistema.",
    itens: [
      "Tudo do Essencial",
      "Landing pages de conversão",
      "Conteúdo e redes sociais",
      "Automações de atendimento",
      "Inteligência artificial aplicada",
      "Evolução e monitoramento contínuos",
    ],
    destaque: true,
  },
];

export default function AtoPlanos() {
  return (
    <section className="section" id="planos" aria-labelledby="planos-titulo">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Planos</p>
          <h2 id="planos-titulo" className={s.h2wide}>
            Escolha apenas como deseja começar.
          </h2>
        </Reveal>

        <div className={s.planos}>
          {planos.map((p, i) => (
            <Reveal key={p.nome} delay={i * 120}>
              <article
                className={`${s.card} ${s.plano} ${p.destaque ? s.planoDestaque : ""}`} data-spotlight
              >
                <h3 className={s.planoNome}>{p.nome}</h3>
                <p className={s.planoPara}>{p.para}</p>
                <ul className={s.planoLista}>
                  {p.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={s.planoCta}>
                  <a
                    href="#contato"
                    className={`${s.btn} ${p.destaque ? s.primary : s.secondary} ${s.full}`}
                  >
                    Falar sobre o {p.nome}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
