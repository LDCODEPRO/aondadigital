"use client";

import { useEffect, useState } from "react";
import t from "./ThemeToggle.module.css";

type Tema = "light" | "dark" | "system";

/* Ícones desenhados aqui: sol, lua e monitor.
   Antes eram os glifos ☀ ☾ ⌘ — finos demais e, no caso do ⌘, errados:
   aquilo é a tecla Command do Mac, não "seguir o sistema". */
const Sol = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4.2" />
    <path d="M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.2 5.2l1.4 1.4M17.4 17.4l1.4 1.4M18.8 5.2l-1.4 1.4M6.6 17.4l-1.4 1.4" />
  </svg>
);
const Lua = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 14.2A8.2 8.2 0 0 1 9.8 4a8.4 8.4 0 1 0 10.2 10.2Z" />
  </svg>
);
const Monitor = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
    <path d="M8.5 20.5h7M12 16.5v4" />
  </svg>
);

const OPCOES: { valor: Tema; titulo: string; Icone: () => React.ReactElement }[] = [
  { valor: "light", titulo: "Tema claro", Icone: Sol },
  { valor: "dark", titulo: "Tema escuro", Icone: Lua },
  { valor: "system", titulo: "Seguir o sistema", Icone: Monitor },
];

function resolver(tema: Tema): "light" | "dark" {
  if (tema !== "system") return tema;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function aplicarTema(tema: Tema) {
  const efetivo = resolver(tema);
  document.documentElement.dataset.theme = efetivo;
  localStorage.setItem("aonda-tema", tema);
  window.dispatchEvent(new CustomEvent("aonda:tema", { detail: efetivo }));
}

export default function ThemeToggle() {
  const [tema, setTema] = useState<Tema>("system");
  const [montado, setMontado] = useState(false);

  useEffect(() => {
    setTema((localStorage.getItem("aonda-tema") as Tema | null) ?? "system");
    setMontado(true);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const aoTrocar = () => {
      const atual = (localStorage.getItem("aonda-tema") as Tema | null) ?? "system";
      if (atual === "system") aplicarTema("system");
    };
    mq.addEventListener("change", aoTrocar);
    return () => mq.removeEventListener("change", aoTrocar);
  }, []);

  return (
    <div className={t.wrap} role="radiogroup" aria-label="Tema da página">
      {OPCOES.map(({ valor, titulo, Icone }) => {
        const ativo = montado && tema === valor;
        return (
          <button
            key={valor}
            type="button"
            role="radio"
            aria-checked={ativo}
            aria-label={titulo}
            title={titulo}
            className={`${t.btn} ${ativo ? t.ativo : ""}`}
            onClick={() => {
              setTema(valor);
              aplicarTema(valor);
            }}
          >
            <Icone />
          </button>
        );
      })}
    </div>
  );
}
