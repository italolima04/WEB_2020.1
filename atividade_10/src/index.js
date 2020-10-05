import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";
import storeConfig from "./store/storeConfig";

const root = document.getElementById("root");
ReactDOM.render(
  // Tornando a instância store como única e visível para toda a aplicação.
  <Provider store={storeConfig()}>
    <App />
  </Provider>,
  root
);
