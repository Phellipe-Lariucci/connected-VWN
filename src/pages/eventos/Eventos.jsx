import React from "react";
import s from "./eventos.module.scss";
import Card from "../../components/Card/Card";
import Vl from "../../components/vertical-line/vl";
import empodera from "../../assets/imagens/empodera.png";
import transforma from "../../assets/imagens/transforma.png";
import carreira from "../../assets/imagens/carreira.png";

export default function Doacao() {
  return (
    <>
      <main className={s.main}>
        <h1 className={s.tituloH1}>Eventos &amp; Palestras</h1>
        <section className={s.sectionCards}>
          <Card
            titulo="Empoderando Jovens para o Futuro"
            descricao={`Atividade: Palestra motivacional sobre liderança jovem e transformação social.\n \nImpacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades.`}
            img={empodera}
            botaotxt="Quero participar"
          />
          <Vl />
          <Card
            titulo="Tecnologia que Transforma"
            descricao={`Atividade: Workshop de introdução à programação e inovação digital. \n \nImpacto: Preparar jovens para o mercado de trabalho através da tecnologia.`}
            img={transforma}
            botaotxt="Quero participar"
          />
          <Vl />
          <Card
            titulo="Carreira e Primeiro Emprego"
            descricao={`Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado.\n \n Impacto: Ajudar jovens a conquistar oportunidades de trabalho.`}
            img={carreira}
            botaotxt="Quero participar"
          />
        </section>
      </main>
    </>
  );
}
