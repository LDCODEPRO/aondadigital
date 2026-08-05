import Reveal from "./Reveal";
import s from "./Sections.module.css";

/**
 * ATO 06 — A TRANSFORMAÇÃO (Parte 10)
 *
 * Nunca chamar de "serviços". O visitante não compra entregáveis,
 * compra a percepção que a empresa dele passa a transmitir.
 * Por isso cada card é ferramenta → benefício, nunca ferramenta isolada.
 */
const mudancas = [
  { o: "Identidade visual", p: "Mais confiança", icone: "identidade" },
  { o: "Website", p: "Mais credibilidade", icone: "website" },
  { o: "Google", p: "Mais descobertas", icone: "google" },
  { o: "Instagram", p: "Mais autoridade", icone: "instagram" },
  { o: "WhatsApp", p: "Mais organização", icone: "whatsapp" },
  { o: "Inteligência artificial", p: "Mais produtividade", icone: "ia" },
  { o: "Automações", p: "Mais tempo", icone: "automacao" },
  { o: "Landing pages", p: "Mais conversões", icone: "landing" },
];

export default function AtoTransformacao() {
  return (
    <section className="section" id="transformacao" aria-labelledby="tr-titulo">
      <div className="container">
        <Reveal>
          <p className="eyebrow">A transformação</p>
          <h2 id="tr-titulo" className={s.h2wide}>
            Sua empresa não precisa mudar. A forma como ela é percebida sim.
          </h2>
          <p className="lead">
            Em poucos dias sua empresa pode transmitir a mesma confiança que levou
            anos para conquistar.
          </p>
        </Reveal>

        <div className={`${s.grid} ${s.g4}`}>
          {mudancas.map((m, i) => (
            <Reveal key={m.o} delay={i * 60}>
              <div className={`${s.card} ${s.transformCard}`} data-spotlight>
                <img
                  src={`/brand/transformacao/${m.icone}.svg`}
                  alt=""
                  aria-hidden="true"
                  className={s.transformIcone}
                />
                <p className={s.cardTitle}>{m.o}</p>
                <p className={s.cardText}>{m.p}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className={`${s.transicao} ${s.transicaoGrande}`}>
            Nós desenvolvemos, construímos e cuidamos para você
          </p>
        </Reveal>

        <Reveal delay={80}>
          <p className={s.transicao}>
            Você continua cuidando da empresa. Nós passamos a cuidar da tecnologia.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
