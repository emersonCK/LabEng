import './App.css';
import React from 'react';
import Titulo from './Titulo';
import Titulo2 from './Titulo2';
import Tabuada from './Tabuada';
import Cores from './Cores';

let n = parseInt(prompt("Digite um número", "9"));


function App() {
  return (
    <div>
      <Cores />
      <Titulo titulo="Fatec"
        texto="Faculdade de tecnologia de Presidente Prudente"
        link="https://www.fatecpp.edu.br"
      />

      <Titulo2 />
      <Tabuada numero={n} />
    </div>
  );
}

export default App;
