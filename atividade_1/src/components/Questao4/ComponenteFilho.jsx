import React, { Component } from "react";

export default class ComponenteFilho extends Component {
  render() {
    return (
      <div>
        <h2>Nome: {this.props.nome}</h2>
        <h3>Curso: {this.props.curso}</h3>
        <h4>Cidade de Origem: {this.props.cidade}</h4>
      </div>
    );
  }
}
