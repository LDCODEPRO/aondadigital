/** Fundo com esferas de luz + grade sutil, portado do ldcodepro.com.br,
 * pra somar com a chuva matrix que ja existe no site. */
export default function FundoLDCODE() {
  return (
    <div className="fxFundo" aria-hidden="true">
      <div className="orbFundo b" style={{ top: "-120px", left: "-80px" }} />
      <div className="orbFundo v" style={{ top: "10%", right: "-120px" }} />
      <div className="orbFundo c" style={{ bottom: "-160px", left: "15%" }} />
      <div className="gridFundo" />
    </div>
  );
}
