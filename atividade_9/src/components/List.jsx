import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import TableRow from "./TableRow";

import Firebase from "../utils/Firebase";
import FirebaseContext from "../utils/FirebaseContext";
import FirebaseService from "../services/FirebaseService";

const ListPage = () => {
  return (
    <>
      <FirebaseContext.Consumer>
        {(firebase) => <List firebase={firebase} />}
      </FirebaseContext.Consumer>
      ;
    </>
  );
};

export default function List(props) {
  const [disciplinas, setDisciplinas] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    FirebaseService.list(props.firebase.getFirestore(), (disciplinas) => {
      setDisciplinas(disciplinas);
      setLoading(false);
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
            firebase={props.firebase}
          />
        );
      });
    }
  }

  function loadingSpinner() {
    return (
      <tr style={{ backgroundColor: "#fff" }}>
        <td colSpan="6">
          <div className="text-center">
            <div
              className="spinner-border ml-auto"
              role="status"
              aria-hidden="true"
              style={{ width: "3rem", height: "3rem" }}
            ></div>
            <br />
            <strong>Loading...</strong>
          </div>
        </td>
      </tr>
    );
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
