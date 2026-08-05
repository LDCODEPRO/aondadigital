import Hero from "@/components/Hero";
import HeroLDCODE from "@/components/HeroLDCODE";
import AtoDor from "@/components/AtoDor";
import AtoSolucao from "@/components/AtoSolucao";
import AtoEngenharia from "@/components/AtoEngenharia";
import AtoNascimento from "@/components/AtoNascimento";
import AtoProjetos from "@/components/AtoProjetos";
import AtoTransformacao from "@/components/AtoTransformacao";
import AtoPlanos from "@/components/AtoPlanos";
import AtoContato from "@/components/AtoContato";
import Rodape from "@/components/Rodape";

/**
 * A jornada é obrigatória e a ordem não pode mudar (Parte 02):
 * curiosidade → identificação → alívio → admiração → confiança → desejo → ação.
 */
export default function Home() {
  return (
    <>
      <main>
        <HeroLDCODE />
        <Hero />              {/* curiosidade   */}
        <div className="tracoSecoes" aria-hidden="true" />
        <AtoDor />            {/* identificação */}
        <div className="tracoSecoes" aria-hidden="true" />
        <AtoSolucao />        {/* alívio        */}
        <AtoEngenharia />     {/* admiração     */}
        <div className="tracoSecoes" aria-hidden="true" />
        <AtoNascimento />
        <AtoProjetos />       {/* confiança     */}
        <AtoTransformacao />  {/* desejo        */}
        <AtoPlanos />         {/* decisão       */}
        <AtoContato />        {/* ação          */}
      </main>
      <Rodape />
    </>
  );
}
