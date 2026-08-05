"use client";

import { useEffect, useRef } from "react";

/** Rede de particulas conectadas, portada do ldcodepro.com.br — aqui cobre a
 * pagina inteira (fixed) em vez de só o hero, pra somar com o resto do fundo. */
export default function RedeParticulas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const cv = canvas;
    const cx = ctx;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    let nodes: { x: number; y: number; vx: number; vy: number; c: string; r: number }[] = [];
    const palette = ["43,127,255", "31,208,232", "139,77,255"];

    function resize() {
      W = window.innerWidth;
      H = window.innerHeight;
      cv.width = W * dpr;
      cv.height = H * dpr;
      cv.style.width = W + "px";
      cv.style.height = H + "px";
      cx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(90, Math.round((W * H) / 18000));
      nodes = [];
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          c: palette[i % palette.length],
          r: Math.random() * 1.6 + 0.7,
        });
      }
    }

    let raf = 0;
    function draw() {
      cx!.clearRect(0, 0, W, H);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > W) n.vx *= -1;
        if (n.y < 0 || n.y > H) n.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 130) {
            cx!.strokeStyle = "rgba(" + n.c + "," + (0.14 * (1 - dist / 130)) + ")";
            cx!.lineWidth = 1;
            cx!.beginPath();
            cx!.moveTo(n.x, n.y);
            cx!.lineTo(m.x, m.y);
            cx!.stroke();
          }
        }
      }
      for (let k = 0; k < nodes.length; k++) {
        const p = nodes[k];
        cx!.fillStyle = "rgba(" + p.c + ",0.6)";
        cx!.beginPath();
        cx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        cx!.fill();
      }
      raf = requestAnimationFrame(draw);
    }

    let t: ReturnType<typeof setTimeout>;
    const aoRedimensionar = () => {
      clearTimeout(t);
      t = setTimeout(resize, 200);
    };
    window.addEventListener("resize", aoRedimensionar);
    resize();
    draw();

    return () => {
      window.removeEventListener("resize", aoRedimensionar);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, []);

  return <canvas ref={ref} className="redeParticulas" aria-hidden="true" />;
}
