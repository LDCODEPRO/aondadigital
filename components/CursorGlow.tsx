"use client";

import { useEffect } from "react";

/**
 * Brilho ambiente que segue o cursor pelo fundo da página inteira —
 * mesma ideia do Complexo-X, só que em vez de ficar preso a um card,
 * acompanha o mouse em qualquer lugar (inclusive fundo vazio).
 * Sutil de propósito: é atmosfera, não protagonista.
 */
export default function CursorGlow() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const raiz = document.documentElement;
    let ticking = false;
    let ultimo = { x: 0, y: 0 };

    function aplicar() {
      ticking = false;
      raiz.style.setProperty("--glow-x", `${ultimo.x}px`);
      raiz.style.setProperty("--glow-y", `${ultimo.y}px`);
    }

    function aoMover(e: PointerEvent) {
      ultimo = { x: e.clientX, y: e.clientY };
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(aplicar);
      }
    }

    document.addEventListener("pointermove", aoMover, { passive: true });
    return () => document.removeEventListener("pointermove", aoMover);
  }, []);

  return <div className="cursorGlow" aria-hidden="true" />;
}
