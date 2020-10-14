import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import FirebaseService from "../services/FirebaseService";
import firebase from "../utils/Firebase";

function Create(props) {
  const history = useHistory();
  if (props.permitted === false) {
    history.push("/signin");
  }

  const [nome, setNome] = useState("");
  const [curso, setCurso] = useState("");
  const [capacidade, setCapacidade] = useState("");

  return (
    <Formik
      initialValues={{
        nome: "",
        curso: "",
        capacidade: 0,
      }}
      validationSchema={Yup.object({
        nome: Yup.string()
          .max(80, "O máximo de caracteres permitidos é: 80")
          .required("Campo Obrigatório."),
        curso: Yup.string()
          .max(60, "O máximo de caracteres permitidos é: 80")
          .required("Campo Obrigatório."),
        capacidade: Yup.number()
          .max(60, "O número máximo permitido é: 60")
          .required("Campo Obrigatório."),
      })}
      onSubmit={(values) => {
        const novaDisciplina = {
          nome: values.nome,
          curso: values.curso,
          capacidade: values.capacidade,
        };
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

        history.push("/list");
      }}
    >
      {(props) => (
        <div>
          <h3 style={{ marginTop: "30px" }}>Criar Disciplina</h3>
          <br />
          <Form>
            <div className="form-group">
              <label htmlFor="Nome">Nome: </label>
              <Field
                type="text"
                name="nome"
                id="nome"
                className={
                  props.touched.nome
                    ? props.errors.nome
                      ? "form-control is invalid"
                      : "form-control is valid"
                    : "form-control"
                }
              />
              <ErrorMessage name="Disciplina" />
            </div>
            <div className="form-group">
              <label htmlFor="Curso">Curso: </label>
              <Field
                type="text"
                name="curso"
                id="curso"
                className={
                  props.touched.curso
                    ? props.errors.curso
                      ? "form-control is invalid"
                      : "form-control is valid"
                    : "form-control"
                }
              />
              <ErrorMessage name="Curso" />
            </div>
            <div className="form-group">
              <label htmlFor="Capacidade">Capacidade: </label>
              <Field
                type="number"
                name="capacidade"
                id="capacidade"
                className={
                  props.touched.capacidade
                    ? props.errors.capacidade
                      ? "form-control is invalid"
                      : "form-control is valid"
                    : "form-control"
                }
              />
              <ErrorMessage name="Capacidade" />
            </div>
            <div className="form-group">
              <input type="submit" value="Criar" className="btn btn-primary" />
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
}

function mapStateToProps(state) {
  return {
    permitted: state.authReducer.verified,
  };
}

export default connect(mapStateToProps, null)(Create);
