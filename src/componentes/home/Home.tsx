import React, { useState, useEffect } from 'react';
import './Home.css';
import { Button } from '@material-ui/core';

function Home(){
  const [num, setNum] = useState(0); // [variável, função]
  useEffect(() => {
    document.title = `Clicou ${num} vezes`;

    return () => {

    }
  }, [num]);
  
  return(
    <>
      <h1>Página Home</h1>
      <h2>você clicou {num} vezes</h2>

      <Button variant="contained" color="primary" onClick={() => setNum(num + 1)}>
        +
      </Button>
      <Button variant="contained" color="primary" onClick={() => setNum(num - 1)}>
        -
      </Button>
    </>
  );
}

export { Home };