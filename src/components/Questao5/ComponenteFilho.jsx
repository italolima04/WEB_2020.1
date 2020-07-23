import React, { Component } from "react";

import { Card, Alert } from "react-bootstrap";

export default class ComponenteFilho extends Component {
  render() {
    return (
      <div>
        <Alert variant="success">
          <Alert.Link href="https://github.com/jeffersoncarvalho/WEB_2020-1/blob/master/ATIVIDADES/ATV1.pdf">
            Esta é a questão 5 da Atividade Remota 01!
          </Alert.Link>
        </Alert>

        <Card
          style={{
            width: "450px",
            height: "220px",
          }}
        >
          <Card.Body>
            <Card.Title>
              <h2>Descrição do Aluno</h2>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Disciplina de Desenvolvimento de Software pra Web
            </Card.Subtitle>
            <Card.Text>
              <h6>
                Nome: <strong>{this.props.nome}</strong>
              </h6>
              <h6>
                Curso: <strong>{this.props.curso}</strong>
              </h6>
              <h6>
                Cidade de Origem: <strong>{this.props.cidade}</strong>
              </h6>
            </Card.Text>
            <Card.Link href="https://github.com/italolima04/WEB_2020.1">
              Repositório da Disciplina
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
