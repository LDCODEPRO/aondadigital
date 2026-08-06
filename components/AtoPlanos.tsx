import Reveal from "./Reveal";
import s from "./Sections.module.css";

/**
 * ATO 08 — PLANOS (Parte 04)
 *
 * Somente dois. Sem tabela comparativa gigante, sem cinquenta recursos.
 *
 * INTEGRIDADE: nenhum preço é exibido porque nenhum preço foi definido pelo
 * Diretor. Inventar valor seria criar informação falsa em página pública.
 * O escopo de cada plano precisa de confirmação antes de virar compromisso
 * comercial — está aqui como estrutura, não como oferta fechada.
 */
const planos = [
  {
    nome: "A Onda",
    preco: "R$ 249,00",
    tipoPreco: "pago",
    para: "Sua entrada definitiva no mundo digital com estrutura profissional completa.",
    itens: [
      "Site profissional",
      "WhatsApp integrado",
      "Hospedagem inclusa",
      "Suporte contínuo",
      "Manutenção semanal",
      "Você fala. Nós cuidamos.",
    ],
    ctaTexto: "Garantir A Onda",
    ctaHref: "#contato",
    destaque: false,
  },
  {
    nome: "O Mar",
    preco: "Entre em contato",
    tipoPreco: "contato",
    para: "Podemos desenvolver",
    itens: [
      "Sistemas empresariais",
      "Plataformas online",
      "Área do cliente",
      "Portais personalizados",
      "Inteligência Artificial para atendimento",
      "Automações empresariais",
      "Integrações entre sistemas",
      "Painéis administrativos",
      "Gestão de clientes e operações",
      "Soluções exclusivas para sua empresa",
      "Desenvolvimento sob medida",
      "Acompanhamento contínuo",
    ],
    ctaTexto: "Entre em Contato",
    ctaHref: "#contato",
    destaque: true,
  },
  {
    nome: "Seja um Parceiro",
    preco: "Consultor A Onda",
    tipoPreco: "consultor",
    para: "Expanda o ecossistema digital",
    itens: [
      "Parte da mensalidade dos seus clientes",
      "Renda recorrente enquanto o cliente permanecer ativo",
      "Treinamento completo",
      "Material de divulgação",
      "Suporte da nossa equipe",
      "Atendimento especializado",
      "Desenvolvimento dos projetos",
      "Manutenção contínua",
      "Sem precisar contratar equipe",
      "Sem precisar entender de tecnologia",
      "Trabalhe de onde estiver",
    ],
    ctaTexto: "Quero saber mais",
    ctaHref: "#contato",
    destaque: false,
  },
];

export default function AtoPlanos() {
  return (
    <section className="section" id="planos" aria-labelledby="planos-titulo">
      <div className="container">
        <Reveal>
          <p className="eyebrow">Planos</p>
          <h2 id="planos-titulo" className={s.h2wide}>
            Escolha como navegar no nosso ecossistema.
          </h2>
        </Reveal>

        <div className={s.planos3}>
          {planos.map((p, i) => (
            <Reveal key={p.nome} delay={i * 120}>
              <article
                className={`${s.card} ${s.plano} ${p.destaque ? s.planoDestaque : ""}`}
                data-spotlight
              >
                <h3 className={s.planoNome}>{p.nome}</h3>
                <div className={s.planoPrecoBox}>
                  <span className={s.planoPrecoVal}>{p.preco}</span>
                </div>
                <p className={s.planoPara}>{p.para}</p>
                <ul className={s.planoLista}>
                  {p.itens.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className={s.planoCta}>
                  <a
                    href={p.ctaHref}
                    className={`${s.btn} ${p.destaque ? s.primary : s.secondary} ${s.full}`}
                  >
                    {p.ctaTexto}
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
