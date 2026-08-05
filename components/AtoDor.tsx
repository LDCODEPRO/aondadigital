import Reveal from "./Reveal";
import s from "./Sections.module.css";

const jargoes = [
  "SEO", "CTA", "CRM", "KPI", "ROI", "LEAD", "FUNIL", "ADS",
  "UX/UI", "API", "SAAS", "LANDING PAGE", "BACKLINK", "COPYWRITING",
  "INBOUND", "MQL", "CPC", "CPA", "DNS", "SSL", "GROWTH", "BRANDING",
];

/**
 * ATO 02 — A DOR (Parte 04)
 *
 * Objetivo psicológico único: identificação. O visitante deve pensar "esse sou eu".
 * Regra da Parte 04: mostrar problemas reais, sem vermelho, sem alarme, sem medo.
 * Os cards são falas do próprio cliente — não acusações da agência.
 */
const dores = [
  { texto: "Meu site já ficou para trás.", imagem: "/brand/dor/retro-site.png", cor: "#3DB4FF" },
  { texto: "Minha empresa é boa. Mas não parece.", imagem: "/brand/dor/google.svg", cor: "#4285F4", destaque: true },
  { texto: "Meu Instagram não transmite confiança.", imagem: "/brand/dor/instagram.svg", cor: "#C837AB", destaque: true },
  { texto: "As pessoas pesquisam minha empresa e não encontram uma presença profissional.", imagem: "/brand/dor/busca-vazia.svg", cor: "#00C2A8" },
  { texto: "TRABALHO AMADOR.<br />LOGO HORRÍVEL.", imagem: "/brand/dor/logo-mal-feito.svg", cor: "#FF8A3D", destaque: true },
  { texto: "Sei que preciso resolver isso. Só não sei por onde começar.", imagem: "/brand/dor/interrogacao.svg", cor: "#00E5FF", destaque: true },
];

export default function AtoDor() {
  return (
    <section className="section" id="dor" aria-labelledby="dor-titulo">
      <div className="container">
        <Reveal>
          <p className={`eyebrow ${s.center}`}>O ponto de partida</p>
          <h2 id="dor-titulo" className={`${s.h2wide} ${s.center}`}>
            Qual desses problemas sua empresa enfrenta hoje?
          </h2>
        </Reveal>

        <div className={`${s.grid} ${s.g6linha} ${s.gridQuadrado}`}>
          {dores.map((dor, i) => (
            <Reveal key={dor.texto} delay={i * 80}>
              <div
                className={`${s.card} ${s.dorCard}`}
                data-spotlight
                style={{ ["--tom" as string]: dor.cor }}
              >
                <p className={s.cardTitle} dangerouslySetInnerHTML={{ __html: dor.texto }} />
                <img
                  src={dor.imagem}
                  alt=""
                  aria-hidden="true"
                  className={
                    dor.imagem.endsWith(".png")
                      ? s.dorImgFoto
                      : dor.destaque
                        ? `${s.dorImgIcone} ${s.dorImgDestaque}`
                        : s.dorImgIcone
                  }
                />
              </div>
            </Reveal>
          ))}
        </div>

        <p className={`${s.esteiraLegenda} ${s.center}`}>
          NÃO ENTENDE NADA DO MUNDO DIGITAL?<br />ISSO É COM A NOSSA EQUIPE.
        </p>
        <div className={s.esteira} aria-hidden="true">
          <div className={s.esteiraTrilho}>
            {[...jargoes, ...jargoes].map((termo, i) => (
              <span key={i} className={s.esteiraItem}>
                {termo}
              </span>
            ))}
          </div>
        </div>
        <div className={s.riscoEsteira} aria-hidden="true" />

        <Reveal>
          <div className={`${s.card} ${s.pegueOndaCard}`} data-spotlight>
            <p className={s.pegueOnda}>
              <img
                src="/brand/aonda-so-palavra.png"
                alt="AONDA"
                className={`${s.pegueOndaLogo} ${s.pegueOndaLogoDark}`}
              />
              <img
                src="/brand/aonda-so-palavra-light.png"
                alt="AONDA"
                className={`${s.pegueOndaLogo} ${s.pegueOndaLogoLight}`}
              />
              <span className={s.pegueOndaResto}>faz por você e sua empresa surfa na tecnologia</span>
            </p>

            <p className={s.transicao}>
              <span className={s.transicaoResto}>
                <span className={s.transicaoLinha}>Chegamos para trazer solução</span>
                <span className={s.transicaoLinha}>Digital para sua empresa</span>
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
