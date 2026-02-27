import React from "react";
import s from "./usuario.module.scss";

export default function Usuario() {
  return (
    <>
      <main className={s.main}>
        <section className={s.section}>
          <img
            src="https://avatars.githubusercontent.com/u/226540720?v=4"
            alt="imagem de perfil"
            className={s.imgPerfil}
          />
          <section className={s.descricao}>
            <h1 className={s.h1}>Luiz Phellipe Santana</h1>
            <h2 className={s.h2}>Voluntário ativo</h2>
            <p className={s.sobre}>
              Apaixonado por tecnologia, jogos e cultura popular. Acredito que
              mesmo a menor das atitudes podem gerar grandes frutos quando a
              intenção é boa!
            </p>
            <div className={s.infos}>
              <div className={s.info}>
                <img src="src\assets\imagens\local.png" alt="Local" /> Uberaba,
                MG
              </div>
              <div className={s.info}>
                <img src="src\assets\imagens\mail.png" alt="E-mail" />{" "}
                phellipelariucci@gmail.com
              </div>
              <div className={s.info}>
                <img src="src\assets\imagens\calendario.png" alt="Data" />{" "}
                08/03/1998
              </div>
            </div>
            <div className={s.tags}>
              <p className={s.tag}>Tecnologia</p>
              <p className={s.tag}>Jogos</p>
              <p className={s.tag}>Programação</p>
              <p className={s.tag}>Cultura nerd</p>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
