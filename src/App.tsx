import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';

import Navbar from './componentes/estaticos/navbar/Navbar';
import { Home } from './componentes/home/Home';
import { About } from './componentes/about/About';

function App() { // 2B || !2B
  return (
    <Router> // orquestrador = monta a pagia que o usuário vai ver
      <Navbar/>
      <Routes> // Lista de rotas da aplicação
        <Route path="/" element={<Home/>} /> // Rota
        <Route path="/home" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  );
}

export default App;