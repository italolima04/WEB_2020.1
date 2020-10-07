import React from "react";
import { Card } from "react-bootstrap";

export default function Home(props) {
  return (
    <div
      style={{
        paddingTop: 50,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "30px",
        fontFamily: "Roboto",
      }}
    >
      <Card
        style={{
          width: "580px",
          height: "300px",
        }}
      >
        <Card.Body style={{ marginTop: "50px" }}>
          <Card.Title>
            <h4 style={{ textAlign: "center" }}>
              Sistema Para Controle De Disciplinas 📚👨‍💻
            </h4>
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            <h4 style={{ textAlign: "center" }}>
              Disciplina: Desenvolvimento de Software para a Web
            </h4>
          </Card.Subtitle>
          <Card.Subtitle>
            <h4 style={{ textAlign: "center" }}>
              Curso: Engenharia de Software
            </h4>
          </Card.Subtitle>
          <Card.Subtitle>
            <h4 style={{ textAlign: "center" }}>Aluno: Ítalo Lima Dantas</h4>
          </Card.Subtitle>
          <Card.Subtitle>
            <h4 style={{ textAlign: "center" }}>Matrícula: 470651</h4>
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </div>
  );
}
