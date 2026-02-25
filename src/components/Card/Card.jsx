import React from "react";
import s from "./card.module.scss";

function Card({ img, imgalt, titulo, descricao, botaotxt }) {
  return (
    <div>
      <img src={img} alt={imgalt}></img>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <button>{botaotxt}</button>
    </div>
  );
}

export default Card;
