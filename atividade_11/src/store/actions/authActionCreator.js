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

import firebase from "../../utils/Firebase";

// 3 Actions: Logar, Sair e Cadastrar-se.

export const signup = (email, password, callback) => {
    return (dispatch) => {
        try {
            firebase
                .auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    firebase.auth().onAuthStateChanged((user) => {
                        user.sendEmailVerification();
                    });
                })
                .then(() => {
                    firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            dispatch({
                                type: SIGNUP_SUCESS,
                                payload: {
                                    authMessage: "Cadastro Realizado com Sucesso! Verifique seu E-mail.",
                                    userMail: user.email,
                                    verified: false,
                                },
                            });
                            callback();
                        } else {
                            dispatch({
                                type: SIGNUP_ERROR,
                                payload: {
                                    authMessage: "Não foi Possível Realizar a Conexão.",
                                },
                            });
                            callback();
                        }
                    });
                })
                .catch((error) => {
                    dispatch({
                        type: SIGNUP_ERROR,
                        payload: {
                            authMessage: `Ocorreu o Erro: ${error} ao Tentar Criar Usuário.`,
                        },
                    });
                    callback();
                });
        } catch (error) {
            dispatch({
                type: SIGNUP_ERROR,
                payload: {
                    authMessage: `Ocorreu o erro: ${error} na Conexão com o Firebase.`,
                },
            });
            callback();
        }
    };
};

export const signin = (email, password, callback) => {
    return (dispatch) => {
        try {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then((data) => {
                    if (!data.user.emailVerified) {
                        dispatch({
                            type: EMAIL_NOT_VERIFIED,
                            payload: {
                                authMessage: `E-mail não verificado. Verifique sua caixa de entrada.`,
                                verified: false,
                            },
                        });
                    } else {
                        dispatch({
                            type: SIGNIN_SUCESS,
                            payload: {
                                authMessage: "Login Efetuado com Sucesso.",
                                userMail: data.user.email,
                                verified: true,
                            },
                        });
                    }
                    callback();
                })
                .catch((error) => {
                    dispatch({
                        type: SIGNIN_ERROR,
                        payload: {
                            authMessage: `Ocorreu o Erro: ${error} ao Realizar o Login do Usuário.`,
                        },
                    });
                    callback();
                });
        } catch (error) {
            dispatch({
                type: SIGNIN_ERROR,
                payload: {
                    authMessage: `Ocorreu o Erro: ${error} na Conexão com o Firebase.`,
                },
            });
            callback();
        }
    };
};

export const signout = (callback) => {
    return (dispatch) => {
        try {
            firebase
                .auth()
                .signOut()
                .then(() => {
                    dispatch({
                        type: SIGNOUT_SUCESS,
                        payload: {
                            authMessage: "Logout Efetuado com Sucesso.",
                            verified: false,
                        },
                    });
                    callback();
                })
                .catch((error) => {
                    dispatch({
                        type: SIGNOUT_ERROR,
                        payload: {
                            authMessage: `Ocorreu  o Erro: ${error} ao Tentar Efetuar o Logout.`,
                        },
                    });
                    callback();
                });
        } catch (error) {
            dispatch({
                type: SIGNOUT_ERROR,
                payload: {
                    authMessage: `Ocorreu  o Erro: ${error} na Conexão com o Firebase.`,
                },
            });
            callback();
        }
    };
};

export const resetAuthMessage = () => {
    return {
        type: RESET_AUTH_MESSAGE,
    };
};