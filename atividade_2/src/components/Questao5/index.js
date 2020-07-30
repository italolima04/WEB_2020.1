import React from "react";
import { Card } from "react-bootstrap";

import "./styles.css";

function Disciplina(props) {
  return (
    <div className="disciplina-container">
      <Card
        style={{
          width: "550px",
          height: "420px",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h2>{props.name}</h2>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {props.semestre}
          </Card.Subtitle>
          <Card.Img src={props.src} style={{ height: "80%", width: "100%" }} />
        </Card.Body>
      </Card>
    </div>
  );
}

function Semestre(props) {
  return (
    <div className="semestre-container">
      {React.Children.map(props.children, (disciplina) => {
        return React.cloneElement(disciplina, { ...props });
      })}
    </div>
  );
}

export { Disciplina, Semestre };
