import Reveal from "./Reveal";
import TiraImagens from "./TiraImagens";
import s from "./Sections.module.css";

/**
 * Imagens do processo de criação de marca — enviadas e adicionadas aqui
 * conforme chegam. Formato: { src, legenda }.
 */
const imagensNascimento: { src: string; legenda: string }[] = [
  { src: "/brand/nascimento/nasce1.png", legenda: "Conceito e naming" },
  { src: "/brand/nascimento/nasce2.png", legenda: "Construção do símbolo" },
  { src: "/brand/nascimento/nasce3.png", legenda: "Versões clara e escura" },
  { src: "/brand/nascimento/nasce4.png", legenda: "Manual de marca" },
  { src: "/brand/nascimento/nasce5.png", legenda: "Identidade final" },
];

export default function AtoNascimento() {
  return (
    <section className="section" id="nascimento" aria-labelledby="nascimento-titulo">
      <div className="container">
        <Reveal>
          <h2 id="nascimento-titulo" className={`${s.h2wide} ${s.center}`}>
            Como nasce uma marca
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <TiraImagens imagens={imagensNascimento} />
        </Reveal>
      </div>
    </section>
  );
}
