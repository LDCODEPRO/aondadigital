"use client";

import AondaSymbol from "./AondaSymbol";
import s from "./Sections.module.css";

const navigationLinks = [
  { label: "O Ponto de Partida", href: "#dor" },
  { label: "A Solução", href: "#solucao" },
  { label: "Ecossistema", href: "#ecossistema" },
  { label: "Transformação", href: "#transformacao" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

const solucaoItems = [
  { label: "Sites e landing pages", href: "#transformacao" },
  { label: "Presença no Google", href: "#transformacao" },
  { label: "Criação e evolução de marcas", href: "#nascimento" },
  { label: "Gestão de conteúdo digital", href: "#transformacao" },
  { label: "Atendimento inteligente", href: "#transformacao" },
  { label: "Sistemas personalizados", href: "#ecossistema" },
  { label: "Manutenção contínua", href: "#planos" },
];

const ecossistemaNodes = [
  { name: "LDCODE" },
  { name: "XOS" },
  { name: "Complexo-X" },
  { name: "Agente-X" },
  { name: "A Onda Digital" },
];

export default function Rodape() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={s.newFooter}>
      <div className="container">
        {/* ÁREA 1 — CTA FINAL INTEGRADO */}
        <div className={s.footerCtaBanner}>
          <div className={s.footerCtaContent}>
            <h3 className={s.footerCtaTitle}>
              Sua empresa não precisa entender de tecnologia para evoluir.
            </h3>
            <p className={s.footerCtaSub}>
              Conte o que você precisa. A A Onda Digital planeja, desenvolve,
              entrega e continua cuidando de tudo depois de pronto.
            </p>
          </div>
          <div className={s.footerCtaAction}>
            <a href="#contato" className={`${s.btn} ${s.primary} ${s.footerCtaBtn}`}>
              <svg
                className={s.waIconBtn}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.2 1.3-2 1.4-.5.1-1.2.2-3.6-.8-3-1.3-5-4.4-5.1-4.6-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l2 1c.3.1.4.2.5.3.1.3.1.7-.1 1.2z" />
              </svg>
              <span>Falar com um consultor</span>
            </a>
            <span className={s.footerCtaSubtext}>Atendimento humano e direto.</span>
          </div>
        </div>

        {/* ÁREA 2 — COLUNAS PRINCIPAIS */}
        <div className={s.footerMainGrid}>
          {/* COLUNA 1 — MARCA & ECOSSISTEMA */}
          <div className={s.footerColBrand}>
            <img
              src="/brand/aonda-logo-completo-semfundo.png"
              alt="A Onda Digital"
              className={s.footerBrandLogo}
            />
            <p className={s.footerBrandDesc}>
              Tecnologia, estratégia e acompanhamento contínuo para empresas que
              querem evoluir no digital sem complicação.
            </p>

            <div className={s.footerSelo}>
              <AondaSymbol size={16} gradientId="footerSeloWave" />
              <span>Do planejamento à evolução contínua.</span>
            </div>

            {/* REPRESENTAÇÃO DO ECOSSISTEMA */}
            <div className={s.footerEcoSection}>
              <p className={s.footerEcoTitle}>Tecnologia que sustenta a A Onda</p>
              <div className={s.footerEcoFlow}>
                {ecossistemaNodes.map((node, index) => (
                  <span key={node.name} className={s.footerEcoItem}>
                    <span className={s.footerEcoNode}>{node.name}</span>
                    {index < ecossistemaNodes.length - 1 && (
                      <span className={s.footerEcoArrow} aria-hidden="true">
                        →
                      </span>
                    )}
                  </span>
                ))}
              </div>
              <p className={s.footerEcoSubtext}>
                Uma estrutura própria de engenharia, inteligência e execução
                digital.
              </p>
            </div>
          </div>

          {/* COLUNA 2 — NAVEGAÇÃO */}
          <div className={s.footerColNav}>
            <h4 className={s.footerColTitle}>Navegação</h4>
            <ul className={s.footerLinkList}>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className={s.footerLink}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3 — SOLUÇÕES */}
          <div className={s.footerColSolutions}>
            <h4 className={s.footerColTitle}>Soluções</h4>
            <ul className={s.footerLinkList}>
              {solucaoItems.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className={s.footerLink}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 4 — CONTATO E ATENDIMENTO */}
          <div className={s.footerColContact}>
            <h4 className={s.footerColTitle}>Contato & Atendimento</h4>
            <div className={s.footerContactList}>
              <div className={s.footerContactItem}>
                <a
                  href="#contato"
                  className={s.footerContactMainLink}
                >
                  <svg
                    className={s.footerContactIcon}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2a10 10 0 0 0-8.6 15l-1.3 4.8 4.9-1.3A10 10 0 1 0 12 2zm5.8 14.2c-.2.7-1.2 1.3-2 1.4-.5.1-1.2.2-3.6-.8-3-1.3-5-4.4-5.1-4.6-.2-.2-1.2-1.6-1.2-3s.8-2.1 1-2.4c.3-.3.6-.4.8-.4h.6c.2 0 .4 0 .6.5l.9 2c.1.2.1.4 0 .5l-.4.6-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.4 2.4 1.5.2.1.4.1.6-.1l.7-.9c.2-.2.4-.2.6-.1l2 1c.3.1.4.2.5.3.1.3.1.7-.1 1.2z" />
                  </svg>
                  <div>
                    <span className={s.footerContactTitle}>WhatsApp oficial</span>
                    <span className={s.footerContactSub}>
                      Fale diretamente com nossa equipe.
                    </span>
                  </div>
                </a>
              </div>

              <div className={s.footerContactItem}>
                <a href="#contato" className={s.footerContactMainLink}>
                  <svg
                    className={s.footerContactIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  <div>
                    <span className={s.footerContactTitle}>
                      Solicitar orçamento
                    </span>
                    <span className={s.footerContactSub}>
                      Conte o que sua empresa precisa.
                    </span>
                  </div>
                </a>
              </div>

              <div className={s.footerContactMeta}>
                <div className={s.footerMetaLine}>
                  <svg
                    className={s.footerMetaIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                  <span>Segunda a sexta, das 8h às 18h.</span>
                </div>

                <div className={s.footerMetaLine}>
                  <svg
                    className={s.footerMetaIcon}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>São Paulo — SP</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ÁREA 3 — BARRA INFERIOR LEGAL */}
        <div className={s.footerBottomBar}>
          <div className={s.footerCopy}>
            © {currentYear} A Onda Digital. Todos os direitos reservados.
          </div>
          <div className={s.footerLegalLinks}>
            <a href="#contato" className={s.footerLegalLink}>
              Política de Privacidade
            </a>
            <span className={s.footerDot}>•</span>
            <a href="#contato" className={s.footerLegalLink}>
              Termos de Uso
            </a>
          </div>
          <div className={s.footerEngine}>
            Uma empresa do ecossistema LDCODE.
          </div>
        </div>
      </div>
    </footer>
  );
}
