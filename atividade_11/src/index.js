import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

import { applyMiddleware, createStore } from "redux";
import reduxThunk from "redux-thunk";
import { Provider } from "react-redux";

import firebase from "./utils/Firebase";
import reducers from "./store/reducers";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

const rrfProps = {
  firebase,
  config: {},
  dispatch: store.dispatch,
};

const root = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <Router>
        <App />
      </Router>
    </ReactReduxFirebaseProvider>
  </Provider>,
  root
);
