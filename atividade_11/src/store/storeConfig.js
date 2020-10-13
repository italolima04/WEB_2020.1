import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";

import reducers from "./reducers";
import firebase from "../utils/Firebase";

function saveToLocalStorage(state) {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch (error) {
        alert(`Ocorreu o Erro: ${error}`);
    }
}

function loadFromLocalStorage() {
    try {
        const serializedState = localStorage.getItem("state");
        if (serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch (error) {
        alert(`Ocorreu o Erro: ${error}`);
    }
}

const persistedState = loadFromLocalStorage();

const store = createStore(
    reducers,
    persistedState,
    applyMiddleware(reduxThunk)
);

const rrfProps = {
    firebase,
    config: {},
    dispatch: store.dispatch,
};

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export { store, rrfProps };