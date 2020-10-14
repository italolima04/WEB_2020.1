import React, { useState } from "react";
import Card from "../commons/Card";
import { connect } from "react-redux";
import { signin } from "../store/actions/authActionCreator";

function Signin(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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
      <input type="submit" value="Realizar Login" className="btn btn-primary" />
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

  function onSubmit(e) {
    e.preventDefault();
    setLoading(true);

    props.mySignin(login, password, () => {
      setLoading(false);
    });

    setLogin("");
    setPassword("");
  }

  return (
    <Card title={<h3>Realizar Login</h3>}>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>
            <strong>Login</strong>
          </label>
          <input
            className="form-control"
            type="text"
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
            className="form-control"
            type="password"
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
    mySignin(login, password, callback) {
      const action = signin(login, password, callback);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
