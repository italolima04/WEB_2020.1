import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

export default function Edit() {
  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [capacidade, setCapacidade] = useState("");
  const [disciplina, setDisciplina] = useState({
    nome: "",
    curso: "",
    capacidade: "",
  });

  const { id } = useParams();
  const history = useHistory();
  console.log(`ID Recebido: ${id}`);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/disciplinas/${id}`)
      .then((response) => {
        console.log(id);
        setDisciplina({
          nome: response.data.nome,
          curso: response.data.curso,
          capacidade: response.data.capacidade,
        });
      })
      .catch((error) => {
        alert("Algo Inesperado Aconteceu :/ ");
        console.log(error);
      });
  }, []);

  function submitForm(event) {
    event.preventDefault();

    const disciplinaAtualizada = {
      nome: nome,
      curso: curso,
      capacidade: capacidade,
    };

    axios
      .put(`http://localhost:3001/disciplinas/${id}`, disciplinaAtualizada)
      .then(() => {
        history.push("/list");
      })
      .catch((error) => {
        console.log(error);
      });
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
