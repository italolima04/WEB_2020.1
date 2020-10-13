import React from "react";

import Card from "./Card";

import { connect } from "react-redux";
import { useEffect } from "react";

function RestrictedCard(props) {
  useEffect(() => {
    if (props.firebaseAuth.isLoaded && props.firebaseAuth.isEmpty) {
      props.history.push("/signin");
    }
  });

  return <Card title={props.title}>{props.children}</Card>;
}

function mapStateToProps(state) {
  return {
    firebaseAuth: state.firebaseReducer.auth,
  };
}

export default connect(mapStateToProps)(RestrictedCard);
