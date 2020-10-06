import React from "react";

import { connect } from "react-redux";
import actions from "../../actions/actions";

import "./index.css";

function Display(props) {
  return (
    <div className="container">
      <legend> {<h3> Número 1:</h3>} </legend>
      <input
        type="number"
        value={props.numberOne}
        onChange={(e) => {
          props.setNumberOne(e.target.value);
        }}
      />
      <br /> <br />
      <legend> {<h3> Número 2:</h3>} </legend>
      <input
        type="number"
        value={props.numberTwo}
        onChange={(e) => {
          props.setNumberTwo(e.target.value);
        }}
      />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    numberOne: state.numberOne,
    numberTwo: state.numberTwo,
  };
}

function mapActionCreatorToProps(dispatch) {
  return {
    setNumberOne(numberOne) {
      const action = actions.changeNumberOne(numberOne);
      dispatch(action);
    },
    setNumberTwo(numberTwo) {
      const action = actions.changeNumberTwo(numberTwo);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapActionCreatorToProps)(Display);
