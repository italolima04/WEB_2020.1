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
      <Hero
        name="Cristiano Ronaldo"
        src="https://images.daznservices.com/di/library/GOAL/d1/91/cristiano-ronaldo-portugal-2019_i7sr9apkxg711bo22gvnaxqq8.jpg?t=1080829723&quality=100"
      />
      <Enemy
        name="Mark Zuckeberg"
        src="https://1.bp.blogspot.com/-PaYfqIBRqNM/Xa5AexCKFcI/AAAAAAAAk68/yJ-MTojHn0sYsqwIjxV9_wJgwr-6h90SwCLcBGAsYHQ/s1600/zuckerberg-russia-ira-eleicoes-2020-eua.jpg"
      />
    </div>
  );
}

export default Arena;
