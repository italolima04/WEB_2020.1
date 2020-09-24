import React from "react";

export default class FirebaseService {
    static list = (firestore, callback) => {
        let ref = firestore.collection("disciplinas");
        ref.onSnapshot((query) => {
            let disciplinas = [];
            query.forEach((doc) => {
                const { nome, curso, capacidade } = doc.data();
                disciplinas.push({
                    _id: doc.id,
                    nome,
                    curso,
                    capacidade,
                });
            });
            callback(disciplinas);
        });
    };

    static delete = (firestore, callback, id) => {
        firestore
            .collection("disciplinas")
            .doc(id)
            .delete()
            .then(() => {
                callback("Disciplina Removida com Sucesso.");
            })
            .catch((error) => {
                callback(`Erro. ${error}`);
            });
    };

    static create = (firestore, callback, disciplina) => {
        firestore
            .collection("disciplinas")
            .add({
                nome: disciplina.nome,
                curso: disciplina.curso,
                capacidade: disciplina.capacidade,
            })
            .then(() => {
                callback("Disciplina Criada com Sucesso.");
            })
            .catch((error) => {
                callback(`Erro. ${error}`);
            });
    };

    static retrieve = (firestore, callback, id) => {
        firestore
            .collection("disciplinas")
            .doc(id)
            .get()
            .then((doc) => {
                const disciplina = {
                    nome: doc.data().nome,
                    curso: doc.data().curso,
                    capacidade: doc.data().capacidade,
                };

                callback(disciplina);
            })
            .catch(() => {
                callback(null);
            });
    };
    static edit = (firestore, callback, id) => {
        firestore
            .collection("disciplinas")
            .doc(id)
            .set()
            .then((doc) => {
                const disciplina = {
                    nome: doc.data().nome,
                    curso: doc.data().curso,
                    capacidade: doc.data().capacidade,
                };

                callback(disciplina);
            })
            .catch(() => {
                callback(null);
            });
    };
}