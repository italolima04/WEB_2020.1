import React, { Component } from "react";

import ComponenteFilho from "./ComponenteFilho";

class ComponentePai extends Component {
  render() {
    return (
      <div>
        <ComponenteFilho
          nome="Ítalo Lima Dantas"
          curso="Engenharia de Software"
          cidade="Solonópole"
        />
      </div>
    );
  }
}

export default ComponentePai;
