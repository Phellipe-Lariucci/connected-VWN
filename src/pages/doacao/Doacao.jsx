import React from "react";
import s from "./doacao.module.scss";
import Card from "../../components/Card/Card";
import Vl from "../../components/vertical-line/vl";
import familia from "../../assets/imagens/familia.png";
import escola from "../../assets/imagens/escola.png";
import conecta from "../../assets/imagens/conecta.png";

export default function Doacao() {
  return (
    <>
      <main className={s.main}>
        <h1 className={s.tituloH1}>Doação</h1>
        <section className={s.sectionCards}>
          <Card
            titulo="Instituto grande familia"
            descricao="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            img={familia}
            botaotxt="Doação"
          />
          <Vl />
          <Card
            titulo="Projeto Futuro na Escola"
            descricao="Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            img={escola}
            botaotxt="Doação"
          />
          <Vl />
          <Card
            titulo="Instituto Conecta Jovem"
            descricao="Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            img={conecta}
            botaotxt="Doação"
          />
        </section>
      </main>
    </>
  );
}
