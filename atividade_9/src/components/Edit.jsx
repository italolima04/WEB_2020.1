import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import FirebaseService from "../services/FirebaseService";

const EditPage = () => {
  const { id } = useParams();
  console.log(`ID Recebido: ${id}`);
  return (
    <>
      <FirebaseService.Consumer>
        {(firebase) => <Edit firebase={firebase} id={id} />}
      </FirebaseService.Consumer>
    </>
  );
};

function Edit(props) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [capacidade, setCapacidade] = useState("");

  useEffect(() => {
    FirebaseService.retrieve(
      props.firebase.getFirestore(),
      (disciplina) => {
        if (disciplina) {
          setNome(disciplina.nome);
          setCurso(disciplina.curso);
          setCapacidade(disciplina.capacidade);
        }
      },
      props.id
    );
  }, []);

  function submitForm(event) {
    event.preventDefault();
    const disciplinaAtualizada = {
      nome: nome,
      curso: curso,
      capacidade: capacidade,
    };
    console.log(disciplinaAtualizada);
    FirebaseService.edit(
      props.firebase.getFirestore(),
      (mensagem) => {
        alert(mensagem);
      },
      props.id,
      disciplinaAtualizada
    );
  }

  return (
    <div>
      <h3 style={{ marginTop: "30px" }}> Editar Disciplina </h3>
      <br />
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Nome: </label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(event) => {
              setNome(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Curso: </label>
          <input
            type="text"
            className="form-control"
            value={curso}
            onChange={(event) => {
              setCurso(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Capacidade: </label>
          <input
            type="text"
            className="form-control"
            value={capacidade}
            onChange={(event) => {
              setCapacidade(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Editar" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}

export default EditPage;
