import s from "./Sections.module.css";

const cadeia = ["LDCODE", "XOS", "COMPLEXO-X", "AGENTE-X", "AONDA DIGITAL"];

export default function Rodape() {
  return (
    <footer className={s.footer}>
      <div className="container">
        <div className={s.footerTop}>
          {/* LADO ESQUERDO: Logo maior sem fundo + Frase */}
          <div className={s.footerLeftCol}>
            <img
              src="/brand/aonda-logo-completo-semfundo.png"
              alt="AONDA DIGITAL"
              className={s.footerLogoImg}
            />
            <p className={s.footerFrase}>
              A tecnologia continua sendo nossa. A simplicidade passa a ser sua.
            </p>
          </div>

          {/* LADO DIREITO: Dados organizados (Navegação & Contato) */}
          <div className={s.footerRightCol}>
            <div className={s.footerMiniCol}>
              <p className={s.footerColHeader}>Navegação</p>
              <ul className={s.footerNavList}>
                <li><a href="#dor">O Ponto de Partida</a></li>
                <li><a href="#solucao">A Solução</a></li>
                <li><a href="#ecossistema">Ecossistema</a></li>
                <li><a href="#transformacao">Transformação</a></li>
                <li><a href="#planos">Planos</a></li>
              </ul>
            </div>

            <div className={s.footerMiniCol}>
              <p className={s.footerColHeader}>Contato</p>
              <ul className={s.footerNavList}>
                <li><a href="#contato">Solicitar Orçamento</a></li>
                <li><span className={s.footerMetaTxt}>Seg a Sex, 8h às 18h</span></li>
                <li><span className={s.footerMetaTag}>São Paulo — SP</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cadeia do Ecossistema */}
        <div className={s.cadeia} aria-label="Ecossistema LDCODE">
          {cadeia.map((n) => (
            <span key={n}>{n}</span>
          ))}
        </div>

        {/* Linha de Copyright */}
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
