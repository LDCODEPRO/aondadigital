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
  { o: "Sites Profissionais", p: "Mais credibilidade", icone: "website" },
  { o: "Google e SEO", p: "Mais descobertas", icone: "google" },
  { o: "WhatsApp Business", p: "Mais organização", icone: "whatsapp" },
  { o: "Área do Cliente", p: "Mais relacionamento", icone: "sistemas" },
  { o: "Sistemas e Plataformas", p: "Mais escala", icone: "cloud" },
  { o: "Inteligência Artificial", p: "Mais produtividade", icone: "ia" },
  { o: "Integrações", p: "Tudo conectado", icone: "analytics" },
  { o: "Automações", p: "Mais tempo", icone: "automacao" },
  { o: "Landing pages", p: "Mais conversões", icone: "landing" },
  { o: "Identidade visual", p: "Mais confiança", icone: "identidade" },
  { o: "Instagram", p: "Mais autoridade", icone: "instagram" },
  { o: "Segurança", p: "Mais proteção", icone: "seguranca" },
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

        <div className={`${s.grid} ${s.g6linha} ${s.gridQuadrado}`}>
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
          <div className={s.transicaoBloco}>
            <p className={`${s.transicao} ${s.transicaoGrande}`}>
              Nós desenvolvemos, construímos e cuidamos para você
            </p>
            <p className={`${s.transicao} ${s.transicaoMenor}`}>
              Você continua cuidando da empresa. Nós passamos a cuidar da tecnologia.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
