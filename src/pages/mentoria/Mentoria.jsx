import React from "react";
import s from "./mentoria.module.scss";
import Card from "../../components/Card/Card";
import Vl from "../../components/vertical-line/vl";
import mentoria from "../../assets/imagens/mentoria.png";
import experiencia from "../../assets/imagens/experiencia.png";
import acompanhamento from "../../assets/imagens/acompanhamento.png";

export default function Doacao() {
  return (
    <>
      <main className={s.main}>
        <h1 className={s.tituloH1}>Mentoria</h1>
        <section className={s.sectionCards}>
          <Card
            titulo="Mentoria de Carreira e Emprego"
            descricao="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            img={mentoria}
            botaotxt="Quero participar"
          />
          <Vl />
          <Card
            titulo="Compartilhe Experiência"
            descricao="Oriente jovens e profissionais iniciantes em sua área."
            img={experiencia}
            botaotxt="Quero participar"
          />
          <Vl />
          <Card
            titulo="Acompanhamento"
            descricao="Participe como guia em jornadas de aprendizado e desenvolvimento."
            img={acompanhamento}
            botaotxt="Quero participar"
          />
        </section>
      </main>
    </>
  );
}
