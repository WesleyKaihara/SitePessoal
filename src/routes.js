import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Contato from './Pages/Contato';
import Portfolio from './Pages/Portfolio';
import Sobre from './Pages/Sobre';
import Galeria from './Pages/Galeria';
import FormProjeto from './Pages/FormProjeto';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/novoProjeto" element={<FormProjeto />} />
      </Routes>
    </Router>
  );
}