import React, { useState } from "react";
import Card from "../commons/Card";
import "firebase/auth";
import { connect } from "react-redux";
import { signup } from "../store/actions/authActionCreator";
import { useEffect } from "react";

function Signup(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setIsMounted(true);
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
      <input
        type="submit"
        value="Realizar Cadastro"
        className="btn btn-primary"
      />
    );
  }

  function renderMessage() {
    if (props.userMsg) {
      const msgType = props.userMsg.includes("Err")
        ? "alert-danger"
        : "alert-info";
      return (
        <div className={`alert ${msgType}`} style={{ marginTop: "10px" }}>
          {props.userMsg}
        </div>
      );
    }
    return;
  }
  return (
    <Card title={<h3>Realizar Cadastro</h3>}>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>
            <strong> Login </strong>
          </label>
          <input
            type="text"
            className="form-control"
            value={login}
            onChange={(e) => {
              setLogin(e.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label>
            <strong>Password</strong>
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {renderButton()}
      </form>
      {renderMessage()}
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    userMsg: state.authReducer.authMsg,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mySignup(login, password, callback) {
      const action = signup(login, password, callback);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
