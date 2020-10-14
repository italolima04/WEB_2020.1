import {
    SIGNUP_SUCESS,
    SIGNUP_ERROR,
    SIGNIN_SUCESS,
    SIGNIN_ERROR,
    SIGNOUT_SUCESS,
    SIGNOUT_ERROR,
    RESET_AUTH_MESSAGE,
    EMAIL_NOT_VERIFIED,
} from "../actions/actions";

const INITIAL_STATE = {
    authMsg: null,
    user: "",
    verified: false,
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case SIGNUP_SUCESS:
            return {
                ...state,
                authMsg: action.payload.authMessage,
                user: action.payload.userMail,
                verified: action.payload.verified,
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
                verified: action.payload.verified,
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
                verified: action.payload.verified,
            };
        case SIGNOUT_ERROR:
            return {
                ...state,
                authMsg: action.payload.authMessage,
            };
        case RESET_AUTH_MESSAGE:
            return {
                ...state,
                authMsg: null,
            };
        case EMAIL_NOT_VERIFIED:
            return {
                ...state,
                authMsg: action.payload.authMessage,
                verified: action.payload.verified,
            };
        default:
            return state;
    }
}