import { combineReducers } from "redux";

import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

// Criando o estado geral da aplicação.

export default combineReducers({
    firebaseReducer,
    authReducer,
});