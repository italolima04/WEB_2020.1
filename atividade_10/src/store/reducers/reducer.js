import { CHANGE_NUMBER_ONE, CHANGE_NUMBER_TWO } from "../actions/types";

const initialState = {
    numberOne: 0,
    numberTwo: 0,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_NUMBER_ONE:
            return {...state, numberOne: action.payload };
        case CHANGE_NUMBER_TWO:
            return {...state, numberTwo: action.payload };
        default:
            return state;
    }
};