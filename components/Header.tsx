"use client";

import { useEffect, useState } from "react";
import AondaSymbol from "./AondaSymbol";
import ThemeToggle from "./ThemeToggle";
import h from "./Header.module.css";

/**
 * Header fixo e mínimo: marca à esquerda, tema à direita.
 *
 * O seletor de tema morava solto no canto da tela e ninguém achava.
 * Aqui ele tem contexto: o lugar onde todo mundo procura controle de site.
 * O fundo só ganha vidro depois que a página rola, para não competir com
 * o Ato 01, que precisa de tela limpa.
 */
export default function Header() {
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header className={`${h.header} ${rolou ? h.solido : ""}`}>
      <div className={h.inner}>
        <a href="#" className={h.marca} aria-label="AONDA DIGITAL — início">
          <AondaSymbol size={30} gradientId="headerWave" />
          <span className={h.nome}>AONDA</span>
        </a>

        <p className={h.tagline} aria-hidden="true">
          Nós <span className={h.destaque}>cuidamos do digital</span>, para você cuidar do que realmente importa:{" "}
          <span className={h.destaque}>sua empresa</span>.
        </p>

        <ThemeToggle />
      </div>
    </header>
  );
}
