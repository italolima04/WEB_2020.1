import React from "react";
import { Link } from "react-router-dom";

import FirebaseService from "../services/FirebaseService";

export default function TableRow(props) {
  function apagar(id, nome) {
    console.log(id);
    console.log(props.nome);
    let res = window.confirm(
      `Tem Certeza que Deseja Apagar a Disciplina ${nome} ?`
    );
    if (res) {
      FirebaseService.delete(
        props.firebase.getFirestore(),
        (mensagem) => {
          alert(mensagem);
        },
        id
      );
    }
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
          onClick={() => apagar(props._id, props.nome)}
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
