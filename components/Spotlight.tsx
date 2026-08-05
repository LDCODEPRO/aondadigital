"use client";

import { useEffect } from "react";

/**
 * Spotlight que segue o cursor nos cards.
 *
 * Mesmo padrão já usado no Complexo-X (--mx/--my atualizados no mousemove),
 * mantido para o ecossistema não ter dois jeitos de fazer a mesma coisa.
 *
 * Delegação de evento no documento em vez de um listener por card: são ~20
 * cards na página, e um único listener passivo custa menos.
 * Em dispositivo sem hover (touch) nem registra — lá o efeito não existe.
 */
export default function Spotlight() {
  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;

    const INCLINACAO_MAX = 7; // graus. Acima disso vira cartoon.
    let ticking = false;
    let ultimo: {
      alvo: HTMLElement;
      x: number;
      y: number;
      rx: number;
      ry: number;
    } | null = null;
    let anterior: HTMLElement | null = null;

    function aplicar() {
      ticking = false;
      if (!ultimo) return;
      const { alvo, x, y, rx, ry } = ultimo;
      alvo.style.setProperty("--mx", `${x}px`);
      alvo.style.setProperty("--my", `${y}px`);
      alvo.style.setProperty("--rx", `${rx}deg`);
      alvo.style.setProperty("--ry", `${ry}deg`);
    }

    /** Devolve o card à posição neutra ao sair — senão fica torto. */
    function soltar(el: HTMLElement | null) {
      if (!el) return;
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    }

    function aoMover(e: PointerEvent) {
      const alvo =
        (e.target as HTMLElement | null)?.closest<HTMLElement>(
          "[data-spotlight]"
        ) ?? null;

      if (alvo !== anterior) {
        soltar(anterior);
        anterior = alvo;
      }
      if (!alvo) return;

      const r = alvo.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      // -1..1 a partir do centro do card
      const nx = (x / r.width) * 2 - 1;
      const ny = (y / r.height) * 2 - 1;

      ultimo = {
        alvo,
        x,
        y,
        rx: -ny * INCLINACAO_MAX, // mouse embaixo → card inclina para trás
        ry: nx * INCLINACAO_MAX,
      };
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(aplicar);
      }
    }

    document.addEventListener("pointermove", aoMover, { passive: true });
    return () => {
      document.removeEventListener("pointermove", aoMover);
      soltar(anterior);
    };
  }, []);

  return null;
}
