import s from "./Hero.module.css";

/**
 * Título entra letra a letra: cada palavra fica em bloco (nowrap) pra não
 * quebrar no meio, e cada letra dentro dela recebe um delay progressivo.
 */
function TituloEntrando({ texto, atraso = 800, passo = 16 }: { texto: string; atraso?: number; passo?: number }) {
  const palavras = texto.split(" ");
  let indice = 0;
  return (
    <>
      {palavras.map((palavra, pi) => {
        const spans = palavra.split("").map((letra, li) => {
          const delay = atraso + indice * passo;
          indice += 1;
          return (
            <span key={li} className={s.letra} style={{ animationDelay: `${delay}ms` }}>
              {letra}
            </span>
          );
        });
        return (
          <span key={pi} className={s.palavra}>
            {spans}
          </span>
        );
      }).reduce((acc, el, i) => {
        if (i > 0) acc.push(" ");
        acc.push(el);
        return acc;
      }, [] as React.ReactNode[])}
    </>
  );
}

/**
 * ATO 01 — ABERTURA (Master Prompt, Parte 04)
 *
 * Objetivo psicológico único: parar o scroll.
 * O visitante deve pensar apenas "Interessante..." — nada além disso.
 *
 * Copy fixada na Parte 06 e tratada como imutável:
 * nenhuma outra frase da landing pode competir com o título.
 */
export default function Hero() {
  return (
    <section className={s.hero} aria-labelledby="hero-title">
      <div className="container">
        <div className={`${s.fade} ${s.d0} ${s.symbol}`}>
          <img
            src="/brand/aonda-wordmark-dark.png"
            alt="AONDA DIGITAL"
            className={`${s.logo} ${s.logoDark}`}
          />
          <img
            src="/brand/aonda-wordmark-light.png"
            alt="AONDA DIGITAL"
            className={`${s.logo} ${s.logoLight}`}
          />
        </div>

        <div className={`${s.fade} ${s.d0} ${s.linha}`} aria-hidden="true" />

        <h1 id="hero-title" className={s.title}>
          <span className={s.tituloPrincipal}>
            <TituloEntrando texto="O seu trabalho é não ter trabalho" />
          </span>
          <span className={s.tituloSecundario}>
            <TituloEntrando texto="e ter mais tempo para cuidar dos novos clientes" atraso={1400} />
          </span>
        </h1>

        <p className={`${s.fade} ${s.d2} ${s.subtitle}`}>
          <span>Você cuida da sua empresa.</span>
          <span>Nós cuidamos de toda a parte digital.</span>
        </p>

        <div className={`${s.fade} ${s.d3} ${s.actions}`}>
          <a href="#contato" className={`${s.btn} ${s.primary}`}>
            Solicitar Orçamento
          </a>
          <a href="#ecossistema" className={`${s.btn} ${s.secondary}`}>
            Conheça o Ecossistema
          </a>
        </div>
      </div>
    </section>
  );
}
