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
          <div className={s.footerBrandBlock}>
            <img
              src="/brand/aonda-rodape-design.png"
              alt="AONDA DIGITAL"
              className={s.footerLogoImg}
            />
            <p className={s.footerFrase}>
              A tecnologia continua sendo nossa. A simplicidade passa a ser sua.
            </p>
          </div>

          <div className={s.footerSocials}>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialIconLink}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" className={s.socialSvg}>
                <defs>
                  <linearGradient id="instaGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC80" />
                    <stop offset="25%" stopColor="#F77737" />
                    <stop offset="50%" stopColor="#F56040" />
                    <stop offset="75%" stopColor="#FD1D1D" />
                    <stop offset="100%" stopColor="#C13584" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#instaGrad)"
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                />
              </svg>
            </a>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className={s.socialIconLink}
              aria-label="Facebook"
            >
              <svg viewBox="0 0 24 24" className={s.socialSvg}>
                <path
                  fill="#1877F2"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </a>
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
