import React, { Component } from "react";

import ComponenteFilho from "../Questao4/ComponenteFilho";

class ComponentePai extends Component {
  render() {
    return (
      <div>
        <ComponenteFilho
          nome="Ítalo Dantas"
          curso="Engenharia de Software"
          cidade="Solonópole"
        />
      </div>
    );
  }
}

export default ComponentePai;
