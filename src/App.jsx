import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Doacao from "./pages/doacao/Doacao";
import Eventos from "./pages/eventos/Eventos";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import Mentoria from "./pages/mentoria/Mentoria";
import Usuario from "./pages/usuario/usuario";
import Home from "./pages/home/Home";
import Footer from "./components/Footer/Footer";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doacao" element={<Doacao />} />
          <Route path="/voluntariado" element={<Voluntariado />} />
          <Route path="/mentoria" element={<Mentoria />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/usuario" element={<Usuario />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
