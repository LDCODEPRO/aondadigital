import Reveal from "./Reveal";
import AondaSymbol from "./AondaSymbol";
import CarrosselDemo from "./CarrosselDemo";
import s from "./Sections.module.css";

const demoLDCODE = [
  { src: "/brand/ldcode-demo/c1_dashboard.png", legenda: "Dashboard executivo" },
  { src: "/brand/ldcode-demo/c2_mapa.png", legenda: "Mapa do sistema" },
  { src: "/brand/ldcode-demo/c3_infra.png", legenda: "Infraestrutura em tempo real" },
  { src: "/brand/ldcode-demo/c4_financeiro.png", legenda: "Visão financeira" },
  { src: "/brand/ldcode-demo/c5_status.png", legenda: "Status dos projetos" },
  { src: "/brand/ldcode-demo/c6_seguranca.png", legenda: "Segurança e auditoria" },
];

const demoXOS = [
  { src: "/brand/xos-demo/x1_centro.png", legenda: "Centro Neural" },
  { src: "/brand/xos-demo/x2_missoes.png", legenda: "Missões dos agentes" },
  { src: "/brand/xos-demo/x3_ia.png", legenda: "IA e automação" },
  { src: "/brand/xos-demo/x4_agentes.png", legenda: "Agentes ativos" },
  { src: "/brand/xos-demo/x5_seguranca.png", legenda: "Segurança" },
  { src: "/brand/xos-demo/x6_auditoria.png", legenda: "Auditoria" },
  { src: "/brand/xos-demo/x7_config.png", legenda: "Configurações" },
];

const demoCX = [
  { src: "/brand/cx-demo/cx1_operacoes.png", legenda: "Sala de operações" },
  { src: "/brand/cx-demo/cx2_marcas.png", legenda: "Marcas e métricas" },
  { src: "/brand/cx-demo/cx3_agentex.png", legenda: "Agente-X Projeto Mãe" },
  { src: "/brand/cx-demo/cx4_motor.png", legenda: "Motor Custo Zero" },
  { src: "/brand/cx-demo/cx5_policial.png", legenda: "Instância O Policial" },
  { src: "/brand/cx-demo/cx6_programador.png", legenda: "Instância O Programador" },
];

const demoAX = [
  { src: "/brand/ax-demo/ax1_saude.png", legenda: "Saúde do Agente X" },
  { src: "/brand/ax-demo/ax2_evolucao.png", legenda: "Evolução e aprendizado" },
  { src: "/brand/ax-demo/ax3_cerebro.png", legenda: "Cérebro e custos" },
  { src: "/brand/ax-demo/ax4_memoria.png", legenda: "Memória" },
  { src: "/brand/ax-demo/ax5_diario.png", legenda: "Diário em tempo real" },
  { src: "/brand/ax-demo/ax6_seguranca.png", legenda: "Segurança" },
  { src: "/brand/ax-demo/ax7_config.png", legenda: "Configurações" },
  { src: "/brand/ax-demo/ax8_escola.png", legenda: "Escola da Claude" },
  { src: "/brand/ax-demo/ax9_pesquisa.png", legenda: "Radar de notícias" },
  { src: "/brand/ax-demo/ax10_aulas.png", legenda: "Aulas anteriores" },
];

/**
 * ATO 04 — A ENGENHARIA INVISÍVEL (Parte 09)
 *
 * Objetivo: admiração. "Esses caras realmente desenvolvem sistemas."
 *
 * NOTA DE INTEGRIDADE: a Parte 09 pede screenshots reais das plataformas.
 * Não temos captura autorizada dos painéis, e inventar um dashboard com números
 * fictícios violaria a Regra de Integridade Absoluta. Por isso os painéis aqui
 * são representações abstratas — sugerem estrutura sem afirmar métrica nenhuma.
 * Substituir por captura real quando houver material aprovado.
 */
const plataformas = [
  {
    nome: "PLATAFORMA DE CONTROLE - LD CODE",
    frase: "Onde toda tecnologia nasce.",
    itens: ["Engenharia de software", "Arquitetura de plataformas", "Sistemas sob medida", "Anos de desenvolvimento próprio"],
    ativas: [0, 2],
  },
  {
    nome: "XOS",
    frase: "O sistema operacional que conecta tudo.",
    itens: ["Monitoramento contínuo", "Infraestrutura", "Métricas e alertas", "Estabilidade"],
    ativas: [1, 3],
  },
  {
    nome: "COMPLEXO-X",
    frase: "Onde a inteligência trabalha.",
    itens: ["Inteligência artificial própria", "Agentes especializados", "Fluxos e automações", "Aprendizado contínuo"],
    ativas: [0, 1, 3],
  },
  {
    nome: "AGENTE-X",
    frase: "Uma equipe digital trabalhando enquanto você trabalha.",
    itens: ["Produção de conteúdo", "Publicações automáticas", "Relatórios", "Atendimento e rotinas"],
    ativas: [2, 3],
  },
];

function Painel({ ativas }: { ativas: number[] }) {
  return (
    <div className={s.painel} aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className={`${s.barra} ${ativas.includes(i) ? s.barraAtiva : ""}`}
          style={{ width: `${[92, 64, 78, 48, 86][i]}%` }}
        />
      ))}
    </div>
  );
}

export default function AtoEngenharia() {
  return (
    <section className="section" id="ecossistema" aria-labelledby="eng-titulo">
      <div className="container">
        <Reveal>
          <p className="eyebrow">A engenharia invisível</p>
          <h2 id="eng-titulo" className={s.h2wide}>
            O que você vê é simples. O que acontece por trás é extraordinário.
          </h2>
          <p className="lead">
            Enquanto outras empresas contratam ferramentas, nós desenvolvemos
            ferramentas. Enquanto outras dependem de plataformas, nós criamos
            plataformas.
          </p>
        </Reveal>

        {plataformas.map((p, i) => (
          <Reveal key={p.nome}>
            <article className={s.plataforma}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <h3 className={s.pNome}>{p.nome}</h3>
                <p className={s.pFrase}>{p.frase}</p>
                <ul className={s.pLista}>
                  {p.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {p.nome === "PLATAFORMA DE CONTROLE - LD CODE" || p.nome === "LDCODE" ? (
                <CarrosselDemo imagens={demoLDCODE} rotulo="painel LDCODE" />
              ) : p.nome === "XOS" ? (
                <CarrosselDemo imagens={demoXOS} rotulo="XOS" />
              ) : p.nome === "COMPLEXO-X" ? (
                <CarrosselDemo imagens={demoCX} rotulo="Complexo-X" />
              ) : p.nome === "AGENTE-X" ? (
                <CarrosselDemo imagens={demoAX} rotulo="Agente-X" />
              ) : (
                <Painel ativas={p.ativas} />
              )}
            </article>
          </Reveal>
        ))}
      </div>

      {/* A REVELAÇÃO: tudo converge para a onda. */}
      <div className="container">
        <Reveal>
          <div className={s.revelacao}>
            <div className={s.ondaLinha} />
            <AondaSymbol size={80} gradientId="revelacaoWave" />
            <p className={s.revelacaoTxt} style={{ marginTop: "var(--space-12)" }}>
              Toda essa tecnologia. Agora ficou simples.
            </p>
            <p className="lead" style={{ marginInline: "auto", textAlign: "center" }}>
              Você não compra tecnologia. Você entra em uma estrutura construída
              durante anos.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
