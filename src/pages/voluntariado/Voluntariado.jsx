import React from "react";
import s from "./voluntariado.module.scss";
import Card from "../../components/Card/Card";
import Vl from "../../components/vertical-line/vl";
import multirao from "../../assets/imagens/multirao.png";
import tecnologia from "../../assets/imagens/tecnologia.png";
import inclusao from "../../assets/imagens/inclusao.png";

export default function Doacao() {
  return (
    <>
      <main className={s.main}>
        <h1 className={s.tituloH1}>Voluntariado</h1>
        <section className={s.sectionCards}>
          <Card
            titulo="Mutirão de reciclagem"
            descricao="Coletar materiais recicláveis e orientar sobre descarte consciente."
            img={multirao}
            botaotxt="Quero participar"
          />
          <Vl />
          <Card
            titulo="Aulas de Tecnologia"
            descricao="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            img={tecnologia}
            botaotxt="Quero participar"
          />
          <Vl />
          <Card
            titulo="Esporte e Inclusão"
            descricao="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            img={inclusao}
            botaotxt="Quero participar"
          />
        </section>
      </main>
    </>
  );
}
