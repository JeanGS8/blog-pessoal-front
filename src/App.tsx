import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Title } from './componentes/Title/Title';
import { Text } from './componentes/Text/Text';

function App() {
  const nome = 'Jean';
  return (
    <>
      <Title nome={nome}/>
      <Text/>
    </>
  );
}

export default App;