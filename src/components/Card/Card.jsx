import React from "react";
import s from "./card.module.scss";

function Card({ img, imgalt, titulo, descricao, botaotxt }) {
  return (
    <div className={s.container}>
      <div className={s.mascara}>
        <img className={s.img} src={img} alt={imgalt}></img>
      </div>
      <h2>{titulo}</h2>
      <p className={s.description}>{descricao}</p>
      <button>{botaotxt}</button>
    </div>
  );
}

export default Card;
