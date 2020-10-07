import {
    SIGNUP_SUCESS,
    SIGNUP_ERROR,
    SIGNIN_SUCESS,
    SIGNIN_ERROR,
    SIGNOUT_SUCESS,
    SIGNOUT_ERROR,
} from "../actions/actions";

import Firebase from "../../utils/Firebase";

// 3 Actions: Logar, Sair e Cadastrar-se.

export const signup = (email, password, callback) => {
    return (dispatch) => {
        try {
            Firebase.auth()
                .createUserWithEmailAndPassword(email, password)
                .then(() => {
                    Firebase.auth().onAuthStateChanged((user) => {
                        if (user) {
                            dispatch({
                                type: SIGNUP_SUCESS,
                                payload: {
                                    authMessage: "Cadastro Realizado com Sucesso.",
                                    userMail: user.email,
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
            Firebase.auth()
                .sigInWithEmailAndPassword(email, password)
                .then((data) => {
                    dispatch({
                        type: SIGNIN_SUCESS,
                        payload: {
                            authMessage: "Login Efetuado com Sucesso.",
                            userMail: data.user.email,
                        },
                    });
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
            Firebase.auth()
                .signOut()
                .then(() => {
                    dispatch({
                        type: SIGNOUT_SUCESS,
                        payload: {
                            authMessage: "Logout Efetuado com Sucesso.",
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