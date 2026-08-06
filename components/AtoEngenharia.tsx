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
    nome: "PLATAFORMA CONTROLE DE SAÚDE DOS AGENTES - XOS",
    frase: "O sistema operacional que conecta tudo.",
    itens: ["Monitoramento contínuo", "Infraestrutura", "Métricas e alertas", "Estabilidade"],
    ativas: [1, 3],
  },
  {
    nome: "PLATAFORMA RESPONSÁVEL DOS PROJETOS MÃE E MARCAS - COMPLEXO-X",
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
              ) : p.nome.includes("XOS") ? (
                <CarrosselDemo imagens={demoXOS} rotulo="XOS" />
              ) : p.nome.includes("COMPLEXO-X") ? (
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
            <div className={s.revelacaoConteudo}>
              <div className={s.simbolo3dContainer}>
                <img
                  src="/brand/aonda-icone-glow.png"
                  alt="Símbolo AONDA 3D"
                  className={s.simbolo3dGrande}
                />
              </div>
              <p className={s.revelacaoTxt}>
                Toda essa tecnologia. Agora ficou simples.
              </p>
              <p className="lead" style={{ marginInline: "auto", textAlign: "center", marginTop: "var(--space-4)" }}>
                Você não compra tecnologia. Você entra em uma estrutura construída
                durante anos.
              </p>
            </div>

            <div className={s.iaCarrosselWrapper}>
              <div className={s.iaCarrosselTrack}>
                {[
                  {
                    nome: "OpenAI",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 23a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0819 4.7792-2.7582a.794.794 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4954 4.4959zm-9.66-4.1678a4.4707 4.4707 0 0 1-.5346-3.0037l.142.0838 4.7792 2.7582a.794.794 0 0 0 .7854 0l5.8341-3.3686v2.3372a.0759.0759 0 0 1-.034.061l-4.8345 2.7907a4.4954 4.4954 0 0 1-6.1376-1.6586zm-1.2181-10.457a4.4755 4.4755 0 0 1 2.3418-1.9628l-.0019.1638v5.5165a.794.794 0 0 0 .3927.6813l5.8341 3.3686-2.02 1.1686a.0759.0759 0 0 1-.072 0l-4.8345-2.7907a4.504 4.504 0 0 1-1.6402-6.1453zm16.597 3.8558l-5.8341-3.3686 2.02-1.1686a.0759.0759 0 0 1 .072 0l4.8345 2.7907a4.4954 4.4954 0 0 1 .6327 6.9453l-.1419-.0838-4.7792-2.7582a.794.794 0 0 0-.7854 0zm2.3418-4.4371l-.142-.0838-4.7792-2.7582a.794.794 0 0 0-.7854 0l-5.8341 3.3686v-2.3372a.0759.0759 0 0 1 .034-.061l4.8345-2.7907a4.504 4.504 0 0 1 6.6722 4.6624zm-12.043-4.1486a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0819-4.7792 2.7582a.794.794 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052v-5.5826a4.504 4.504 0 0 1 4.4954-4.4959z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Anthropic Claude",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M13.727 3.303h-3.454l-6.4 17.394h3.454l1.326-3.6h6.702l1.326 3.6h3.454zm-4.048 10.976l2.321-6.3 2.321 6.3z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Google Gemini",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 12 17.373 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "DeepSeek",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.84.63-3.53 1.69-4.88l11.19 11.19C15.53 19.37 13.84 20 12 20zm6.31-3.12L7.12 5.69C8.47 4.63 10.16 4 12 4c4.41 0 8 3.59 8 8 0 1.84-.63 3.53-1.69 4.88z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Meta Llama",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-2-12a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm4 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-6 6a4 4 0 0 0 8 0z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Perplexity",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.3l-6 3.75-6-3.75V8.7l6-3.75 6 3.75v7.6zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Copilot",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Midjourney",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    ),
                  },
                  {
                    nome: "xAI Grok",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "ElevenLabs",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M7 4h3v16H7V4zm7 0h3v16h-3V4z" />
                      </svg>
                    ),
                  },
                ].concat([
                  {
                    nome: "OpenAI",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.259 23a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7466-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0819 4.7792-2.7582a.794.794 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4954 4.4959zm-9.66-4.1678a4.4707 4.4707 0 0 1-.5346-3.0037l.142.0838 4.7792 2.7582a.794.794 0 0 0 .7854 0l5.8341-3.3686v2.3372a.0759.0759 0 0 1-.034.061l-4.8345 2.7907a4.4954 4.4954 0 0 1-6.1376-1.6586zm-1.2181-10.457a4.4755 4.4755 0 0 1 2.3418-1.9628l-.0019.1638v5.5165a.794.794 0 0 0 .3927.6813l5.8341 3.3686-2.02 1.1686a.0759.0759 0 0 1-.072 0l-4.8345-2.7907a4.504 4.504 0 0 1-1.6402-6.1453zm16.597 3.8558l-5.8341-3.3686 2.02-1.1686a.0759.0759 0 0 1 .072 0l4.8345 2.7907a4.4954 4.4954 0 0 1 .6327 6.9453l-.1419-.0838-4.7792-2.7582a.794.794 0 0 0-.7854 0zm2.3418-4.4371l-.142-.0838-4.7792-2.7582a.794.794 0 0 0-.7854 0l-5.8341 3.3686v-2.3372a.0759.0759 0 0 1 .034-.061l4.8345-2.7907a4.504 4.504 0 0 1 6.6722 4.6624zm-12.043-4.1486a4.4755 4.4755 0 0 1 2.8764 1.0408l-.1419.0819-4.7792 2.7582a.794.794 0 0 0-.3927.6813v6.7369l-2.02-1.1686a.071.071 0 0 1-.038-.052v-5.5826a4.504 4.504 0 0 1 4.4954-4.4959z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Anthropic Claude",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M13.727 3.303h-3.454l-6.4 17.394h3.454l1.326-3.6h6.702l1.326 3.6h3.454zm-4.048 10.976l2.321-6.3 2.321 6.3z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Google Gemini",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 0C12 6.627 6.627 12 0 12C6.627 12 17.373 12 12 24C12 17.373 17.373 12 24 12C17.373 12 12 6.627 12 0Z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "DeepSeek",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-1.84.63-3.53 1.69-4.88l11.19 11.19C15.53 19.37 13.84 20 12 20zm6.31-3.12L7.12 5.69C8.47 4.63 10.16 4 12 4c4.41 0 8 3.59 8 8 0 1.84-.63 3.53-1.69 4.88z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Meta Llama",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-2-12a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm4 0a2 2 0 1 0 2 2 2 2 0 0 0-2-2zm-6 6a4 4 0 0 0 8 0z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Perplexity",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5zm6 14.3l-6 3.75-6-3.75V8.7l6-3.75 6 3.75v7.6zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Copilot",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2a10 10 0 0 0-10 10c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "Midjourney",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    ),
                  },
                  {
                    nome: "xAI Grok",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                      </svg>
                    ),
                  },
                  {
                    nome: "ElevenLabs",
                    svg: (
                      <svg viewBox="0 0 24 24" fill="currentColor" className={s.iaLogoSvg}>
                        <path d="M7 4h3v16H7V4zm7 0h3v16h-3V4z" />
                      </svg>
                    ),
                  },
                ]).map((ia, index) => (
                  <div key={index} className={s.iaItemCinza} title={ia.nome}>
                    {ia.svg}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
