import React from "react";
import "./App.css";

import Larger from "./components/Larger/index";
import Multiply from "./components/Multiply";
import Sum from "./components/Sum";

function App(props) {
  return (
    <div className="App">
      <h1 style={{ background: "green" }}>Redux Calc</h1>
      <Multiply />
      <Sum />
      <Larger />
    </div>
  );
}

export default App;
