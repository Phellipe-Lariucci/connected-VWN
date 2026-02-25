import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Logo from "../../assets/imagens/logoCoracao.png";
import s from "./header.module.scss";

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function menuMobile() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuAberto(false);
      }
    }

    window.addEventListener("resize", menuMobile);
    return () => window.removeEventListener("resize", menuMobile);
  }, []);

  return (
    <>
      <header className={s.header}>
        <section>
          <Link to="/">
            <img src={Logo} alt="logo de uma mao segurando um coração" />
          </Link>
        </section>
        {!isMobile && (
          <nav>
            <ul>
              <Link to="/doacao" onClick={() => setMenuAberto(false)}>
                Doação
              </Link>
              <Link to="/voluntariado" onClick={() => setMenuAberto(false)}>
                Voluntariado
              </Link>
              <Link to="/mentoria" onClick={() => setMenuAberto(false)}>
                Mentorias
              </Link>
              <Link to="/eventos" onClick={() => setMenuAberto(false)}>
                Eventos
              </Link>
            </ul>
          </nav>
        )}
        <img
          src="https://avatars.githubusercontent.com/u/226540720?v=4"
          alt="imagem de perfil"
          className={s.imgPerfil}
          onClick={() => setMenuAberto(!menuAberto)}
        />
      </header>
      <nav className={menuAberto ? s.navUser : s.closedNav}>
        <Link to="/usuario" onClick={() => setMenuAberto(false)}>
          Phellipe
        </Link>
        <Link onClick={() => setMenuAberto(false)}>Meus Voluntariado</Link>
        <Link onClick={() => setMenuAberto(false)}>Configurações de conta</Link>
        {isMobile && (
          <>
            <Link to="/" onClick={() => setMenuAberto(false)}>
              Doação
            </Link>
            <Link to="/voluntariado" onClick={() => setMenuAberto(false)}>
              Voluntariado
            </Link>
            <Link to="/mentoria" onClick={() => setMenuAberto(false)}>
              Mentorias
            </Link>
            <Link to="/eventos" onClick={() => setMenuAberto(false)}>
              Eventos
            </Link>
          </>
        )}
        <Link>Sair</Link>
      </nav>
    </>
  );
}
