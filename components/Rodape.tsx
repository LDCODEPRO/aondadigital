import AondaSymbol from "./AondaSymbol";
import s from "./Sections.module.css";

/**
 * RODAPÉ (Parte 04 — última frase)
 * A cadeia do ecossistema aparece discretamente, sem explicação.
 * Quem entendeu, entendeu.
 */
const cadeia = [
  { n: "LDCODE", url: "https://ldcodepro.com.br" },
  { n: "XOS", url: "" },
  { n: "COMPLEXO-X", url: "https://complexox.ldcodepro.com.br" },
  { n: "AGENTE-X", url: "" },
  { n: "AONDA DIGITAL", url: "" },
];

export default function Rodape() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerTop}>
          <div>
            <img
              src="/brand/aonda-simbolo-sem-fundo.png"
              alt="AONDA DIGITAL"
              className={s.footerLogoImg}
            />
            <p className={s.footerFrase}>
              A tecnologia continua sendo nossa. A simplicidade passa a ser sua.
            </p>
          </div>
        </div>

        <div className={s.cadeia} aria-label="Ecossistema LDCODE">
          {cadeia.map((item) => (
            <span key={item.n}>
              {item.url ? (
                <a href={item.url} target="_blank" rel="noopener noreferrer" className={s.cadeiaLink}>
                  {item.n}
                </a>
              ) : (
                item.n
              )}
            </span>
          ))}
        </div>

        <div className={s.copyright} style={{ justifyContent: "center", textAlign: "center" }}>
          <span>
            © 2024 A ONDA DIGITAL – Todos os direitos reservados. Marca integrante do ecossistema LDCODE - Desenvolvimento de Projetos e Sistemas.
          </span>
        </div>
      </div>
    </footer>
  );
}
