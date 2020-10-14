import React, { useState, useEffect } from "react";
import "firebase/firestore";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

import firebase from "../utils/Firebase";
import FirebaseService from "../services/FirebaseService";

function Edit(props) {
  const history = useHistory();
  if (props.permitted === false) {
    history.push("/signin");
  }

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [capacidade, setCapacidade] = useState("");

  const { id } = useParams();

  useEffect(() => {
    FirebaseService.retrieve(
      firebase.firestore(),
      (disciplina) => {
        if (disciplina) {
          setNome(disciplina.nome);
          setCurso(disciplina.curso);
          setCapacidade(disciplina.capacidade);
        }
      },
      id
    );
  }, []);

  function submitForm(event) {
    event.preventDefault();
    const disciplinaAtualizada = {
      nome: nome,
      curso: curso,
      capacidade: capacidade,
    };
    FirebaseService.edit(
      firebase.firestore(),
      (mensagem) => {
        alert(mensagem);
      },
      id,
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

function mapStateToProps(state) {
  return {
    permitted: state.authReducer.verified,
  };
}

export default connect(mapStateToProps, null)(Edit);
