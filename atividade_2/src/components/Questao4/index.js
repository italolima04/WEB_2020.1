import React from "react";

import "./styles.css";

function Hero(props) {
  return (
    <div className="hero-container">
      <h3> Nome: {props.name} </h3>
      <img
        src={props.src}
        style={{ height: "360px", width: "597px" }}
        alt="Imagem "
      />
      <h3>Arena: {props.arena} </h3>
    </div>
  );
}

function Enemy(props) {
  return (
    <div className="enemy-container">
      <h3> Nome: {props.name} </h3>
      <img
        src={props.src}
        style={{ height: "360px", width: "597px" }}
        alt="Imagem "
      />
      <h3>Arena: {props.arena} </h3>
    </div>
  );
}

function Arena(props) {
  return (
    <div className="arena-container">
      {React.Children.map(props.children, (filho) => {
        return React.cloneElement(filho, { ...props });
      })}
    </div>
  );
}

export { Hero, Enemy, Arena };
