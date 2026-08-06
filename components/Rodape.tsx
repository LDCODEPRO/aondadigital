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
        <div className={s.footerGrid}>
          <div className={s.footerColMarca}>
            <AondaSymbol size={44} gradientId="footerWave" />
            <p className={s.footerFrase}>
              A tecnologia continua sendo nossa. A simplicidade passa a ser sua.
            </p>
          </div>

          <div className={s.footerCol}>
            <p className={s.footerColTitulo}>Navegação</p>
            <ul className={s.footerLinks}>
              <li><a href="#dor">O Ponto de Partida</a></li>
              <li><a href="#solucao">A Solução</a></li>
              <li><a href="#ecossistema">Ecossistema</a></li>
              <li><a href="#transformacao">Transformação</a></li>
              <li><a href="#planos">Planos</a></li>
            </ul>
          </div>

          <div className={s.footerCol}>
            <p className={s.footerColTitulo}>Contato & Atendimento</p>
            <ul className={s.footerLinks}>
              <li><a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer">WhatsApp Oficial</a></li>
              <li><a href="#contato">Solicitar Orçamento</a></li>
              <li><span>Atendimento: Seg a Sex, 8h às 18h</span></li>
              <li><span style={{ color: "var(--aonda-blue)", fontWeight: 600 }}>São Paulo - SP</span></li>
            </ul>
          </div>
        </div>

        <div className={s.cadeia} aria-label="Ecossistema LDCODE">
          {cadeia.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        <div className={s.copyright}>
          <span>
            © 2024 A Onda Digital. Todos os direitos reservados.
          </span>
          <span>Desenvolvido sobre engenharia própria</span>
        </div>
      </div>
    </footer>
  );
}
