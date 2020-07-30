import React from "react";

import "./styles.css";

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
      <Hero name="Cristiano Ronaldo" src="../../assets/Cristiano.jpg" />
      <Enemy name="Mark Zuckeberg" src="../../assets/Zuckeberg.jpg" />
    </div>
  );
}

export default Arena;
