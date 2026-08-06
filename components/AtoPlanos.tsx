"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import s from "./Sections.module.css";

const planos = [
  {
    nome: "A Onda",
    cor: "#00A9DE",
    precoAnual: "R$ 199,00",
    precoMensal: "R$ 249,00",
    tipoPreco: "pago",
    para: "Quero entrar na Onda",
    itens: [
      "Desenvolvimento ou melhoria da identidade da marca",
      "Site profissional",
      "Domínio .com.br",
      "Hospedagem",
      "Site seguro",
      "Bate-papo online",
      "Formulário de contato",
      "Google Maps",
      "Otimização básica para o Google",
      "Backup automático",
      "Manutenção contínua semanal",
      "Suporte",
    ],
    ctaTexto: "Quero começar",
    ctaHref: "#contato",
    destaque: false,
  },
  {
    nome: "O Mar",
    cor: "#4D7CFF",
    preco: "Entre em contato",
    tipoPreco: "contato",
    para: "Podemos desenvolver",
    itens: [
      "Sistema para sua empresa",
      "Área exclusiva para clientes",
      "Área exclusiva para colaboradores",
      "Inteligência Artificial",
      "Automatização de tarefas",
      "Tudo conectado em um só lugar",
      "Painel para acompanhar seu negócio",
      "Organização da empresa",
      "Soluções personalizadas",
      "Desenvolvimento sob medida",
      "Melhorias contínuas",
      "Suporte contínuo",
    ],
    ctaTexto: "Entre em Contato",
    ctaHref: "#contato",
    destaque: true,
  },
  {
    nome: "Tenha uma Renda Mensal",
    cor: "#7B5CFF",
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
      "Faça parte deste ecossistema",
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
                style={{ ["--tom" as string]: p.cor }}
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
