import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TableRow(props) {
  function apagar() {
    axios
      .delete(`http://localhost:3002/disciplinas/delete/${props._id}`)
      .then(() => {
        console.log(props._id);
        props.apagarElementoPorID(props._id);
        alert("Disciplina Apagada com Sucesso!");
        window.location.reload();
      })
      .catch((error) => {
        alert(
          `Desculpe. Infelizmente não foi possível concluir a operação, devido ao Erro: ${error}`
        );
      });
  }
  return (
    <tr>
      <td>{props._id}</td>
      <td>{props.nome}</td>
      <td>{props.curso}</td>
      <td>{props.capacidade}</td>
      <td style={{ textAlign: "center" }}>
        <Link
          to={`/edit/${props._id}`}
          className="btn btn-primary"
          style={{
            backgroundColor: "#1E90FF",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Editar
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>
        <button
          onClick={apagar}
          className="btn btn-primary"
          style={{
            backgroundColor: "#B22222",
            fontWeight: "bold",
            border: "none",
          }}
        >
          Apagar
        </button>
      </td>
    </tr>
  );
}
