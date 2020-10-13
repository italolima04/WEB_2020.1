import {
    SIGNUP_SUCESS,
    SIGNUP_ERROR,
    SIGNIN_SUCESS,
    SIGNIN_ERROR,
    SIGNOUT_SUCESS,
    SIGNOUT_ERROR,
} from "../actions/actions";

const INITIAL_STATE = {
    authMsg: null,
    user: "",
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNUP_SUCESS:
            return {
                ...state,
                authMsg: action.payload.authMessage,
                user: action.payload.userMail,
            };
        case SIGNUP_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage,
            };
        case SIGNIN_SUCESS:
            return {
                ...state,
                authMsg: action.payload.authMessage,
                user: action.payload.userMail,
            };
        case SIGNIN_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage,
            };
        case SIGNOUT_SUCESS:
            return {
                ...state,
                user: null,
                authMsg: action.payload.authMessage,
            };
        case SIGNOUT_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage,
            };
        default:
            return state;
    }
}