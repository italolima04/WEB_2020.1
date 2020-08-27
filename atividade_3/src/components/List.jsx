import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import TableRow from "./TableRow";

export default function List() {
  const [disciplinas, setDisciplinas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/disciplinas/list")
      .then((response) => {
        setDisciplinas(response.data);
      })
      .catch((error) => {
        console.log(`Desculpe. Algo Inesperado Aconteceu :/ ${error}`);
      });
  }, []);

  function apagarElementoPorID(id) {
    let disciplinasTemp = disciplinas;
    for (let i = 0; i < disciplinasTemp.length; i++) {
      if (disciplinasTemp[i]._id === id) {
        disciplinasTemp.splice(i, 1);
      }
    }
    setDisciplinas(disciplinasTemp);
  }

  function montarTabela() {
    if (!disciplinas) return;
    else {
      return disciplinas.map((disciplina, i) => {
        return (
          <TableRow
            _id={disciplina._id}
            nome={disciplina.nome}
            curso={disciplina.curso}
            capacidade={disciplina.capacidade}
            key={i}
            apagarElementoPorID={apagarElementoPorID}
          />
        );
      });
    }
  }

  return (
    <div>
      <h3 style={{ textAlign: "center" }}> Listar Disciplinas </h3>
      <table className="table table-striped" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Curso</th>
            <th>Capacidade</th>
            <th colSpan="2" style={{ textAlign: "center" }}>
              Ação
            </th>
          </tr>
        </thead>
        <tbody>{montarTabela()}</tbody>
      </table>
    </div>
  );
}
