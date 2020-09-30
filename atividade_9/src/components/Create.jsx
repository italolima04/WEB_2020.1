import React, { useState } from "react";
import FirebaseContext from "../utils/FirebaseContext";
import FirebaseService from "../services/FirebaseService";

const CreatePage = () => {
  return (
    <>
      <FirebaseContext.Consumer>
        {(firebase) => <Create firebase={firebase} />}
      </FirebaseContext.Consumer>
    </>
  );
};

function Create(props) {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [capacidade, setCapacidade] = useState("");

  function submitForm(e) {
    e.preventDefault();
    const novaDisciplina = { nome: nome, curso: curso, capacidade: capacidade };
    FirebaseService.create(
      props.firebase.getFirestore(),
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

export default CreatePage;
