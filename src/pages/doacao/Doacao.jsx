import React from "react";
import s from "./doacao.module.scss";
import Card from "../../components/Card/Card";
import instituto from "../../assets/imagens/instituto.jpg";

export default function Doacao() {
  return (
    <>
      <main>
        <h1>Doacao</h1>
        <section>
          <Card
            titulo="Instituto grande familia"
            descricao="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            img={instituto}
            botaotxt="Quero Doar"
          />
          <Card
            titulo="Instituto grande familia"
            descricao="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            img={instituto}
            botaotxt="Quero Doar"
          />
          <Card
            titulo="Instituto grande familia"
            descricao="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            img={instituto}
            botaotxt="Quero Doar"
          />
        </section>
      </main>
    </>
  );
}
