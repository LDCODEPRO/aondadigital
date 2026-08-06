"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import s from "./Sections.module.css";

const planos = [
  {
    nome: "A Onda",
    precoAnual: "R$ 199,00",
    precoMensal: "R$ 249,00",
    tipoPreco: "pago",
    para: "Sua entrada definitiva no mundo digital com estrutura profissional completa.",
    itens: [
      "Desenvolvimento ou melhoria da identidade da marca",
      "Site profissional",
      "Domínio .com.br",
      "Hospedagem",
      "Site seguro",
      "Até 10 páginas",
      "Layout para celular, tablet e computador",
      "Bate-papo online",
      "Formulário de contato",
      "Google Maps",
      "Otimização básica para o Google",
      "Backup automático",
      "Manutenção contínua semanal",
      "Suporte",
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
  const [ciclo, setCiclo] = useState<"anual" | "mensal">("anual");

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
                  <span className={s.planoPrecoVal}>
                    {p.tipoPreco === "pago"
                      ? ciclo === "anual"
                        ? p.precoAnual
                        : p.precoMensal
                      : p.preco}
                  </span>
                  {p.tipoPreco === "pago" && (
                    <div className={s.toggleContainerCard}>
                      <button
                        type="button"
                        className={`${s.toggleBtnCard} ${ciclo === "anual" ? s.toggleAtivoCard : ""}`}
                        onClick={() => setCiclo("anual")}
                      >
                        Anual
                      </button>
                      <button
                        type="button"
                        className={`${s.toggleBtnCard} ${ciclo === "mensal" ? s.toggleAtivoCard : ""}`}
                        onClick={() => setCiclo("mensal")}
                      >
                        Mensal
                      </button>
                    </div>
                  )}
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
