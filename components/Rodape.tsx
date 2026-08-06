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
          <div className={s.footerLeft}>
            <AondaSymbol size={69} gradientId="footerWave" />
            <p className={s.footerFrase}>
              A tecnologia continua sendo nossa. A simplicidade passa a ser sua.
            </p>
          </div>

          <div className={s.footerRight}>
            <div className={s.footerCol}>
              <p className={s.footerColTitulo}>Redes Sociais</p>
              <ul className={s.footerColLinks}>
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              </ul>
            </div>

            <div className={s.footerCol}>
              <p className={s.footerColTitulo}>Contato</p>
              <ul className={s.footerColLinks}>
                <li><a href="#contato">Solicitar Orçamento</a></li>
                <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
                <li><a href="mailto:contato@aondadigital.com.br">E-mail</a></li>
              </ul>
            </div>
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
