import React from "react";
import s from "./home.module.scss";

export default function Home() {
  return (
    <>
      <main className={s.main}>
        <section className={s.conteudo}>
          <section className={s.info}>
            <h1>Projeto Sociais que Transformam</h1>
            <h2>
              Conectamos sua empresa com projetos sociais impactantes.
              <br /> Juntos, criamos mudanças reais na comunidade.
            </h2>
            <button className={s.cadastrar}>Cadastrar empresa &rarr;</button>
            <section className={s.dados}>
              <div className={s.indicador}>
                <p>500+</p>
                <p>Empresas Voluntárias</p>
              </div>
              <div className={s.indicador}>
                <p>1.2K+</p>
                <p>Projetos Realizados</p>
              </div>
              <div className={s.indicador}>
                <p>50K+</p>
                <p>Vidas Impactadas</p>
              </div>
            </section>
          </section>
          <img
            src="src\assets\imagens\imgHome.png"
            alt="Mãos segurando um globo com as pessoas dando a mao em volta"
            className={s.imgHome}
          />
        </section>
      </main>
    </>
  );
}
