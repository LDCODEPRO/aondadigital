import AondaSymbol from "./AondaSymbol";
import s from "./Sections.module.css";

/**
 * RODAPÉ (Parte 04 — última frase)
 * A cadeia do ecossistema aparece discretamente, sem explicação.
 * Quem entendeu, entendeu.
 */
const cadeia = ["LDCODE", "XOS", "COMPLEXO-X", "AGENTE-X", "AONDA DIGITAL"];

export default function Rodape() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerTop}>
          <div>
            <AondaSymbol size={44} gradientId="footerWave" />
            <p className={s.footerFrase}>
              A tecnologia continua sendo nossa. A simplicidade passa a ser sua.
            </p>
          </div>
        </div>

        <div className={s.cadeia} aria-label="Ecossistema LDCODE">
          {cadeia.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        <div className={s.copyright}>
          <span>
            © {new Date().getFullYear()} AONDA DIGITAL — ecossistema LDCODE
          </span>
          <span>Desenvolvido sobre engenharia própria</span>
        </div>
      </div>
    </footer>
  );
}
