import { Link } from "react-router-dom";
import Logo from "../../assets/imagens/logoCoracao.png";
import s from "./header.module.scss";

export default function Header() {
  return (
    <>
      <header className={s.header}>
        <section>
          <Link to="/">
            <img src={Logo} alt="logo de uma mao segurando um coração" />
          </Link>
        </section>
        <nav>
          <ul>
            <Link to="/">Doação</Link>
            <Link to="/voluntariado">Voluntariado</Link>
            <Link to="/mentoria">Mentorias</Link>
            <Link to="/eventos">Eventos</Link>
          </ul>
        </nav>
        <img
          src="https://avatars.githubusercontent.com/u/226540720?v=4"
          alt="imagem de perfil"
          className={s.imgPerfil}
        />
      </header>
      <Link to="/usuario">Phellipe</Link>
    </>
  );
}
