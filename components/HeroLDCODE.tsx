"use client";

import { useEffect, useRef, useState } from "react";
import s from "./HeroLDCODE.module.css";

/** Um so <img>: troca o src conforme o tema (claro/escuro), sem duplicar elemento. */
function useLogoPorTema() {
  const [src, setSrc] = useState("/brand/aonda-wordmark-dark.png");
  useEffect(() => {
    function atualizar() {
      const tema = document.documentElement.dataset.theme;
      setSrc(tema === "light" ? "/brand/aonda-wordmark-light.png" : "/brand/aonda-wordmark-dark.png");
    }
    atualizar();
    window.addEventListener("aonda:tema", atualizar);
    return () => window.removeEventListener("aonda:tema", atualizar);
  }, []);
  return src;
}

/** Inclinacao 3D seguindo o mouse, portada do ldcodepro.com.br — o logo (e a
 * marca da AONDA junto) reagem ao cursor dentro do card. */
function useTilt3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const stage = stageRef.current;
    if (!stage || reduzir) return;
    let raf = 0;
    function aoMover(e: PointerEvent) {
      const r = stage!.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        stage!.style.setProperty("--tiltY", (px * 9).toFixed(2) + "deg");
        stage!.style.setProperty("--tiltX", (-py * 9).toFixed(2) + "deg");
        // logo LDCODE: acompanha o cursor, movimento maior (fica na frente)
        stage!.style.setProperty("--tiltTX", (px * 20).toFixed(1) + "px");
        stage!.style.setProperty("--tiltTY", (py * 20).toFixed(1) + "px");
        // marca AONDA: movimento menor e invertido (fica atras, sensacao de profundidade)
        stage!.style.setProperty("--tiltTX2", (px * -10).toFixed(1) + "px");
        stage!.style.setProperty("--tiltTY2", (py * -10).toFixed(1) + "px");
      });
    }
    function aoSair() {
      stage!.style.setProperty("--tiltY", "0deg");
      stage!.style.setProperty("--tiltX", "0deg");
      stage!.style.setProperty("--tiltTX", "0px");
      stage!.style.setProperty("--tiltTY", "0px");
      stage!.style.setProperty("--tiltTX2", "0px");
      stage!.style.setProperty("--tiltTY2", "0px");
    }
    stage.addEventListener("pointermove", aoMover);
    stage.addEventListener("pointerleave", aoSair);
    return () => {
      stage.removeEventListener("pointermove", aoMover);
      stage.removeEventListener("pointerleave", aoSair);
    };
  }, []);
  return stageRef;
}

const slide = {
  badge: "Atendendo novos negócios em 2026",
  linha1: "O QUE FAZEMOS ?",
  linha2: "Nós cuidamos do digital da sua empresa",
  lead: "Criamos o site, a loja online e as ferramentas que fazem o seu comércio aparecer, atrair clientes e vender mais. Você cuida do negócio — a gente cuida da parte digital.",
  prova: "+120 negócios já vendem online com a AONDA",
};

const marcas = ["Restaurantes", "Lojas", "Salões", "Clínicas", "Serviços", "Comércio local"];

const stats = [
  { valor: 120, sufixo: "+", label: "Negócios atendidos" },
  { valor: 7, sufixo: " dias", label: "Para ficar no ar" },
  { valor: 98, sufixo: "%", label: "Recomendam a gente" },
  { valor: 100, sufixo: "%", label: "Entregas no prazo" },
];

function Contador({ valor, sufixo }: { valor: number; sufixo: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const dur = 1500;
          let start: number | null = null;
          function tick(ts: number) {
            if (start === null) start = ts;
            const p = Math.min((ts - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            if (el) el.textContent = Math.round(valor * eased) + sufixo;
            if (p < 1) requestAnimationFrame(tick);
            else if (el) el.textContent = valor + sufixo;
          }
          requestAnimationFrame(tick);
          obs.unobserve(el);
        });
      },
      { threshold: 0.6 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [valor, sufixo]);
  return <div ref={ref} className={s.num}>0</div>;
}

export default function HeroLDCODE() {
  const stageRef = useTilt3D();
  const logoSrc = useLogoPorTema();
  return (
    <>
      <section className={s.hero}>
        <div className={s.wrap}>
          <div className={s.bannerGrid}>
            <div className={s.bannerTextCol}>
              <div className={s.heroSlides}>
                <div className={`${s.heroSlide} ${s.active}`}>
                  <span className={s.heroBadge}>
                    <span className={s.dotBadge} /> {slide.badge}
                  </span>
                  <h1>
                    <span className={s.line}>{slide.linha1}</span>
                    <span className={`${s.line} ${s.gradText}`}>{slide.linha2}</span>
                  </h1>
                  <p className={s.lead}>{slide.lead}</p>
                  <div className={s.proof}>
                    <div className={s.avatars}>
                      <span>🍔</span><span>👗</span><span>💇</span><span>🛠️</span>
                    </div>
                    <div>
                      <div className={s.stars}>★★★★★</div>
                      <span>{slide.prova}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.bannerVisual}>
              <div className={s.heroLogoStage} ref={stageRef}>
                <div className={`${s.codeChip} ${s.tl}`}>
                  <b className={s.stars} style={{ fontSize: 13 }}>★★★★★</b> <span>Nota 4,9</span>
                </div>
                <img src={logoSrc} alt="AONDA DIGITAL" className={s.imgTilt} />
                <div className={`${s.codeChip} ${s.br}`}>
                  <span className={s.up}>▲ +38%</span> <span>em vendas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={s.trust}>
        <div className={s.trustWrap}>
          <span className={s.trustLabel}>Feito para o seu tipo de negócio</span>
          <div className={s.marks}>
            {marcas.map((m) => (
              <a key={m} className={s.markLink}>{m}</a>
            ))}
          </div>
        </div>
      </section>

      <section className={s.statsSection}>
        <div className={s.statsGrid}>
          {stats.map((st) => (
            <div key={st.label} className={s.stat}>
              <Contador valor={st.valor} sufixo={st.sufixo} />
              <div className={s.lbl}>{st.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
