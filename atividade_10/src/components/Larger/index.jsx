import React from "react";

import { connect } from "react-redux";

import changeNumberOne from "../../actions/actions";
import changeNumberTwo from "../../actions/actions";

function Larger(props) {
  return (
    <div>
      <h2>Maior: {props.resultado}</h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    resultado:
      state.numberOne > state.numberTwo ? state.numberOne : state.numberTwo,
  };
}

function mapActionCreatorToProps(dispatch) {
  return {
    setNumberOne(number) {
      const action = changeNumberOne(number);
      dispatch(action);
    },
    setNumberTwo(number) {
      const action = changeNumberTwo(number);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Larger);
