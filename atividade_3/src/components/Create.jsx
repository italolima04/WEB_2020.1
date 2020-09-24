import React, { useState } from "react";
import axios from "axios";

export default function Create() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [capacidade, setCapacidade] = useState("");

  function submitForm(e) {
    e.preventDefault();

    const novaDisciplina = { nome: nome, curso: curso, capacidade: capacidade };

    axios
      .post("http://localhost:3002/disciplinas/register", novaDisciplina)
      .then((response) => {
        alert(`Disciplina de ID ${response.data._id} Inserida com Sucesso!`);
      })
      .catch((error) => {
        alert("Aconteceu algo Inesperado e a Disciplina não foi Criada :/ ");
        console.log(error);
      });

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
