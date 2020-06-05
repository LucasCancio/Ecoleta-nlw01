import React from "react";
import "./App.css";

import Routes from './routes'

function App(){
  return (
    <Routes />
  );
}


export default App;

















/* 
import React,{useState} from "react";
import "./App.css"; */

// JSX -> Sintaxe de XML dentro do Javascript

/* import Header from "./Header";

function App() {
  let [counter, setCounter] = useState(0);// useState(ValorPadrão), retorna -> [valor do estado, função para atualizar o valor do estado]

  //Imutabilidade -> cria um novo estado, sem mudar o anterior
  //counter + 1, no lugar de counter++/counter = counter + 1
  function handleButtonClick(){
    setCounter(counter + 1);
  }

  return (
    <div>
      <Header title={`Contador: ${counter}`} />

      <h1>{counter}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div>
  );
}
 */

