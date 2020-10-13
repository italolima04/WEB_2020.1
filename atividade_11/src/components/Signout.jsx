import React from "react";
import Card from "../commons/RestrictedCard";

import { connect } from "react-redux";
import { signout } from "../store/actions/authActionCreator";

function Signout(props) {
  function logout() {
    props.mySignout(() => {
      props.history.push("/signin");
    });
  }
  return (
    <Card title={<h3>Realizar Logout </h3>} history={props.history}>
      <button className="btn btn-danger" onClick={logout}>
        Realizar Logout
      </button>
    </Card>
  );
}

function mapStateToProps(state) {
  return {
    userMsg: state.authReducer.authMsg,
    firebaseAuth: state.firebaseReducer.auth,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    mySignout(callback) {
      const action = signout(callback);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Signout);
