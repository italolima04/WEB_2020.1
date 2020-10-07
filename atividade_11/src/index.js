import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";

const root = document.getElementById("root");
ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Router>
      <App />
    </Router>
  </FirebaseContext.Provider>,
  root
);
