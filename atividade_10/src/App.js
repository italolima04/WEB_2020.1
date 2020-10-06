import React from "react";
import "./App.css";

import Sum from "./components/Sum";
import Multiply from "./components/Multiply";
import Larger from "./components/Larger";
import Display from "./components/Display";

import Calculadora from "./assets/calculadora.svg";

function App() {
  return (
    <div className="App">
      <h1>Redux Calc</h1>
      <img src={Calculadora} height={70} alt="Calculadora" />
      <Display />
      <div className="result">
        <Sum />
        <Multiply />
        <Larger />
      </div>
    </div>
  );
}

export default App;
