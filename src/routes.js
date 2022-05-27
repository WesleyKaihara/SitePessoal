import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Home from "./Pages/Home";
import Contato from './Pages/Contato';
import Portifolio from './Pages/Portifolio';
import Sobre from './Pages/Sobre';

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/portifolio" element={<Portifolio />} />
        <Route path="/eventos" element={<Home />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </Router>

  )
}