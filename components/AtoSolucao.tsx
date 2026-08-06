import Reveal from "./Reveal";
import s from "./Sections.module.css";

/**
 * ATO 03 — A SOLUÇÃO (Parte 04)
 *
 * Objetivo: alívio. O visitante deve pensar "era exatamente isso que eu precisava".
 * Regra: mostrar apenas simplicidade. Nenhuma tecnologia aparece aqui ainda —
 * a engenharia só é revelada no Ato 04.
 */
const naoPrecisa = [
  "Saber programar",
  "Entender de tecnologia",
  "Aprender sobre IA",
  "Usar ferramentas",
  "Contratar mais funcionário pra isso",
];

const passos = [
  { n: "01", t: "Você conta o que precisa", d: "", cor: "#00A9DE" },
  { n: "02", t: "Nós planejamos", d: "", cor: "#268FE8" },
  { n: "03", t: "Nós desenvolvemos", d: "", cor: "#4D7CFF" },
  { n: "04", t: "Você aprova", d: "", cor: "#646BFB" },
  { n: "05", t: "Nós continuamos cuidando", d: "", cor: "#7B5CFF" },
];

export default function AtoSolucao() {
  return (
    <section className="section" id="solucao" aria-labelledby="solucao-titulo">
      <div className="container">
        <Reveal>
          <h2 id="solucao-titulo" className={s.frase}>
            Você não precisa
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <ul className={s.naoPrecisaLista}>
            {naoPrecisa.map((item) => (
              <li key={item} className={s.naoPrecisaItem}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={280}>
          <p className={s.naoPrecisaFinal}>Não importa o seu segmento. Nós cuidamos do digital.</p>
        </Reveal>

        <ol className={s.passos} style={{ listStyle: "none", padding: 0 }}>
          {passos.map((p, i) => (
            <Reveal
              as="li"
              key={p.n}
              delay={i * 140}
              className={s.passo}
              style={{ ["--tom" as string]: p.cor }}
            >
              <p className={s.passoNum}>{p.n}</p>
              <p className={s.passoTxt}>{p.t}</p>
              <p className={s.cardText}>{p.d}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
