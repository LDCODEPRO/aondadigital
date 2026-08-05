"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import s from "./Sections.module.css";

type Imagem = { src: string; legenda: string };

/** Carrossel genérico de screenshots reais — troca sozinho, por clique nos
 * pontinhos e abre o card inteiro ampliado e centralizado ao clicar nele. */
export default function CarrosselDemo({ imagens, rotulo }: { imagens: Imagem[]; rotulo: string }) {
  const [indice, setIndice] = useState(0);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setIndice((i) => (i + 1) % imagens.length), 4200);
    return () => clearInterval(t);
  }, [imagens.length]);

  useEffect(() => {
    if (!aberto) return;
    const aoTeclar = (e: KeyboardEvent) => {
      if (e.key === "Escape") setAberto(false);
      if (e.key === "ArrowRight") setIndice((i) => (i + 1) % imagens.length);
      if (e.key === "ArrowLeft") setIndice((i) => (i - 1 + imagens.length) % imagens.length);
    };
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [aberto, imagens.length]);

  const corpo = (
    <>
      <div className={s.carrosselViewport}>
        {imagens.map((img, i) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.legenda}
            className={`${s.carrosselImg} ${i === indice ? s.carrosselImgAtiva : ""}`}
          />
        ))}
      </div>
      <p className={s.carrosselLegenda}>{imagens[indice].legenda}</p>
      <div className={s.carrosselPontos}>
        {imagens.map((img, i) => (
          <button
            key={img.src}
            type="button"
            aria-label={`Ver ${img.legenda}`}
            className={`${s.carrosselPonto} ${i === indice ? s.carrosselPontoAtivo : ""}`}
            onClick={(e) => {
              e.stopPropagation();
              setIndice(i);
            }}
          />
        ))}
      </div>
    </>
  );

  return (
    <>
      <div
        className={`${s.carrossel} ${s.carrosselClicavel}`}
        aria-label={`Demonstração do ${rotulo} — clique para ampliar`}
        role="button"
        tabIndex={0}
        onClick={() => setAberto(true)}
        onKeyDown={(e) => e.key === "Enter" && setAberto(true)}
      >
        {corpo}
      </div>

      {aberto &&
        typeof document !== "undefined" &&
        createPortal(
          <div className={s.lightbox}>
            <div className={s.lightboxCard}>
              {corpo}
              <button
                type="button"
                className={s.lightboxVoltar}
                onClick={() => setAberto(false)}
              >
                ← Voltar
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
