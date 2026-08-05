"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  /** atraso em ms para escalonar itens de uma mesma lista */
  delay?: number;
  className?: string;
  as?: "div" | "li" | "section" | "article";
  style?: React.CSSProperties;
};

/**
 * Revelação no scroll: blur → fade → translateY, nessa ordem (Parte 07).
 * Máximo de 20px de deslocamento. Nada entra deslizando de longe.
 *
 * Respeita prefers-reduced-motion: se o usuário pediu menos movimento,
 * o conteúdo já nasce visível e o observer nem é criado.
 */
export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  style,
}: Props) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduz) {
      setShown(true);
      return;
    }
    // Navegador sem IntersectionObserver: mostra na hora em vez de esconder para sempre.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      // Dispara um pouco ANTES do bloco entrar na tela: com 160px de respiro
      // entre seções, esperar a entrada deixaria viewports em branco no meio.
      { threshold: 0.05, rootMargin: "0px 0px 12% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${shown ? "is-shown" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms`, ...style }}
    >
      {children}
    </Tag>
  );
}
