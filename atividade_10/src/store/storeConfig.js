// Estado geral da minha aplicação.
import { createStore } from "redux";

import reducer from "../reducers/reducer";

function storeConfig() {
    return createStore(reducer);
}

export default storeConfig;