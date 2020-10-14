import React, { useState } from "react";
import { connect } from "react-redux";
import FirebaseService from "../services/FirebaseService";
import firebase from "../utils/Firebase";

import { useHistory } from "react-router-dom";

function Create(props) {
  const history = useHistory();
  if (props.permitted === false) {
    history.push("/signin");
  }

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [capacidade, setCapacidade] = useState("");

  function submitForm(e) {
    e.preventDefault();
    const novaDisciplina = { nome: nome, curso: curso, capacidade: capacidade };
    FirebaseService.create(
      firebase.firestore(),
      (mensagem) => {
        alert(mensagem);
      },
      novaDisciplina
    );
    setNome("");
    setCurso("");
    setCapacidade("");
  }

  return (
    <div>
      <h3 style={{ marginTop: "30px" }}>Criar Disciplina</h3>
      <br />
      <form onSubmit={submitForm}>
        <div className="form-group">
          <label>Nome: </label>
          <input
            type="text"
            className="form-control"
            value={nome}
            onChange={(e) => {
              setNome(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Curso: </label>
          <input
            type="text"
            className="form-control"
            value={curso}
            onChange={(e) => {
              setCurso(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>Capacidade: </label>
          <input
            type="text"
            className="form-control"
            value={capacidade}
            onChange={(e) => {
              setCapacidade(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Criar" className="btn btn-primary" />
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

export default connect(mapStateToProps, null)(Create);
