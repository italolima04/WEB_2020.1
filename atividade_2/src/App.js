import React from "react";

/* Questão 1 
import Questao1 from "./components/Questao1";

function App() {
  return (
    <div>
      <Questao1 />
    </div>
  );
}

export default App;
*/

/* Questão 2
import Questao2 from "./components/Questao2";

function App() {
  return (
    <div>
      <Questao2 />
    </div>
  );
}

export default App;

*/

/* Questão 3
import World from "./components/Questao3/World";
import Arena from "./components/Questao1";

function App() {
  return (
    <div>
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
    </div>
  );
}

export default App;
*/

/* Questão 4

import Cristiano from "./assets/Cristiano.jpg";
import Zuckeberg from "./assets/Zuckeberg.jpg";

import { Hero, Enemy, Arena } from "./components/Questao4/index";

function App() {
  return (
    <div>
      <Arena arena="Winners">
        <Hero name="Cristiano Ronaldo" src={Cristiano} />
        <Enemy name="Mark Zuckeberg" src={Zuckeberg} />
      </Arena>
    </div>
  );
}

export default App;

*/

// Questão 5

import LIP from "./assets/LIP.jpg";
import ED from "./assets/ED.png";
import SO from "./assets/SO.jpg";
import WEB from "./assets/WEB.jpg";
import REQ from "./assets/Requisitos.png";
import APS from "./assets/APS.png";

import { Disciplina, Semestre } from "./components/Questao5/";

function App() {
  return (
    <div>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Disciplinas</h2>
      <Semestre semestre="3º Semestre">
        <Disciplina name="Linguagens de Programação" src={LIP} />
        <Disciplina name="Estrutura de Dados" src={ED} />
        <Disciplina name="Sistemas Operacionais" src={SO} />
        <Disciplina name="Desenvolvimento Web" src={WEB} />
        <Disciplina name="Requisitos de Software" src={REQ} />
        <Disciplina name="Análise e Projeto de Sistemas" src={APS} />
      </Semestre>
    </div>
  );
}

export default App;
