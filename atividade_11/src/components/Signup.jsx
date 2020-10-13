import React, { useState } from "react";
import Card from "../commons/Card";

import { connect } from "react-redux";
import { signup } from "../store/actions/authActionCreator";
import { useEffect } from "react";

function Signup(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isMounted, setisMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setisMounted(true);
  });

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);
    props.mySignup(login, password, () => {
      isMounted && setLoading(false);
    });
    setLogin("");
    setPassword("");
  }

  function renderButton() {
    if (loading) {
      return (
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
          Carregando...
        </button>
      );
    }

    return (
      <input type="submit" value="Cadastrar" className="btn btn-primary" />
    );
  }

  return <div></div>;
}

export default Signup;
