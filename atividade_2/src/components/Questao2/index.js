import React from "react";

import "./styles.css";

import { path_1 } from "./path";
import { path_2 } from "./path";

function Hero(props) {
  return (
    <div className="hero-container">
      {props.name}
      <img
        src={props.src}
        style={{ height: "360px", width: "597px" }}
        alt="Imagem "
      />
    </div>
  );
}

function Enemy(props) {
  return (
    <div className="enemy-container">
      {props.name}
      <img
        src={props.src}
        style={{ height: "360px", width: "597px" }}
        alt="Imagem"
      />
    </div>
  );
}

function Arena() {
  return (
    <div className="arena-container">
      <Hero name="Cristiano Ronaldo" src={path_1} />
      <Enemy name="Mark Zuckeberg" src={path_2} />
    </div>
  );
}

export default Arena;
