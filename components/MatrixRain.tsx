"use client";

import { useEffect, useRef } from "react";

/**
 * Chuva matrix de fundo.
 *
 * Portada do efeito real do Complexo-X (/var/www/complexo-x/index.html),
 * mantendo o comportamento original: mesmos glifos, mesmo rastro de 10,
 * mesmo passo, throttle de 50ms, pausa em aba oculta e desligada em
 * prefers-reduced-motion.
 *
 * No tema claro os valores são os mesmos do original (o fundo do Complexo-X,
 * #EDF4FB, também é claro). No tema escuro as cores sobem para o ciano e o azul
 * da própria AONDA, que rendem melhor sobre #050A14.
 *
 * OBS: no Complexo-X este efeito está atualmente DESLIGADO por
 * `.fx{display:none!important}`. O código foi lido de lá, mas não está rodando lá.
 */

const GLYPHS = "01<>/{}[]=+*#$%&XKZアイウエオカキクケコサシスセソタチツ";
const TRAIL = 10;

export default function MatrixRain() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    // Referências locais: o narrowing do TS não atravessa as closures abaixo.
    const cv = canvas;
    const cx = ctx;

    const mobile = window.matchMedia("(max-width: 900px)").matches;
    const FONT = mobile ? 13 : 15;
    const STEP = FONT * 1.35;

    let W = 0,
      H = 0,
      cols = 0,
      raf = 0,
      rodando = true,
      ultimo = 0;
    let drops: { y: number; v: number }[] = [];

    /** No claro a tinta precisa ser mais escura e mais opaca para existir sobre branco. */
    const temaEscuro = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches ||
      document.documentElement.dataset.theme === "dark";

    let cabeca = "";
    let rastroRGB = "";
    let alfaCabeca = 0;
    let alfaRastro = 0;

    function aplicarTema() {
      if (temaEscuro()) {
        cabeca = "0,217,254"; // ciano da onda
        rastroRGB = "10,109,254"; // azul da marca
        alfaCabeca = 0.42;
        alfaRastro = 0.26;
      } else {
        // Valores idênticos aos do Complexo-X. O fundo de lá (#EDF4FB) também é
        // claro, então esta calibragem já foi feita para fundo claro — não faz
        // sentido enfraquecê-la.
        cabeca = "0,180,220";
        rastroRGB = "61,123,255";
        alfaCabeca = 0.4;
        alfaRastro = 0.26;
      }
    }

    // Imagem do logo da Aonda para cair junto com os caracteres
    const imgLogo = new Image();
    imgLogo.src = "/brand/aonda-simbolo.svg";
    let logoCarregado = false;
    imgLogo.onload = () => {
      logoCarregado = true;
    };

    function redimensionar() {
      const d = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * d;
      cv.height = H * d;
      cx.setTransform(d, 0, 0, d, 0, 0);
      cols = Math.floor(W / (FONT * 1.4));
      drops = Array.from({ length: cols }, (_, index) => ({
        y: Math.random() * -H,
        v: 1.2 + Math.random() * 2.2,
        isLogo: index % 6 === 0, // A cada 6 colunas, uma traz o logo caindo
      }));
    }

    function frame(ts: number) {
      if (!rodando) return;
      if (ts - ultimo < 50) {
        raf = requestAnimationFrame(frame);
        return;
      }
      ultimo = ts;

      cx.clearRect(0, 0, W, H);
      cx.font = `${FONT}px Consolas, ui-monospace, monospace`;
      cx.textAlign = "center";

      for (let i = 0; i < cols; i++) {
        const col = drops[i];
        col.y += col.v * 6;
        if (col.y - TRAIL * STEP > H) {
          col.y = Math.random() * -200;
          col.v = 1.2 + Math.random() * 2.2;
        }
        const px = i * FONT * 1.4 + FONT * 0.7;

        for (let t = 0; t < TRAIL; t++) {
          const cy = col.y - t * STEP;
          if (cy < -STEP || cy > H + STEP) continue;
          const a = t === 0 ? alfaCabeca : alfaRastro * (1 - t / TRAIL);

          // Se a cabeça desta coluna for um logo e a imagem já tiver carregado:
          if (t === 0 && (col as any).isLogo && logoCarregado) {
            cx.save();
            cx.globalAlpha = a * 1.5;
            const logoSize = FONT * 1.8;
            cx.drawImage(imgLogo, px - logoSize / 2, cy - logoSize / 2, logoSize, logoSize);
            cx.restore();
          } else {
            cx.fillStyle =
              t === 0 ? `rgba(${cabeca},${a})` : `rgba(${rastroRGB},${a})`;
            cx.fillText(
              GLYPHS[(Math.random() * GLYPHS.length) | 0],
              px,
              cy
            );
          }
        }
      }
      raf = requestAnimationFrame(frame);
    }

    aplicarTema();
    redimensionar();
    raf = requestAnimationFrame(frame);

    const aoRedimensionar = () => redimensionar();
    const aoTrocarVisibilidade = () => {
      rodando = !document.hidden;
      if (rodando) {
        ultimo = 0;
        raf = requestAnimationFrame(frame);
      } else {
        cancelAnimationFrame(raf);
      }
    };
    const mqTema = window.matchMedia("(prefers-color-scheme: dark)");
    const aoTrocarTema = () => aplicarTema();
    // O seletor de tema dispara este evento: sem ele a chuva ficaria com a cor
    // do tema anterior até o próximo resize.
    const aoTrocarTemaManual = () => aplicarTema();

    window.addEventListener("resize", aoRedimensionar);
    document.addEventListener("visibilitychange", aoTrocarVisibilidade);
    mqTema.addEventListener("change", aoTrocarTema);
    window.addEventListener("aonda:tema", aoTrocarTemaManual);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", aoRedimensionar);
      document.removeEventListener("visibilitychange", aoTrocarVisibilidade);
      mqTema.removeEventListener("change", aoTrocarTema);
      window.removeEventListener("aonda:tema", aoTrocarTemaManual);
    };
  }, []);

  return <canvas ref={ref} className="matrix" aria-hidden="true" />;
}
