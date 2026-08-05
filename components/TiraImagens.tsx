"use client";

type Imagem = { src: string; legenda?: string };

/** Tira de imagens rolando sem parar, mesmo estilo da esteira de siglas —
 * só que com imagens no lugar de texto. */
export default function TiraImagens({ imagens }: { imagens: Imagem[] }) {
  if (imagens.length === 0) return null;

  return (
    <div className="tiraImagens" aria-hidden="true">
      <div className="tiraImagensTrilho">
        {[...imagens, ...imagens].map((img, i) => (
          <img key={i} src={img.src} alt={img.legenda ?? ""} className="tiraImagensItem" />
        ))}
      </div>
    </div>
  );
}
