import React from "react";

import { connect } from "react-redux";

import actions from "../../actions/actions";

function Sum(props) {
  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          props.setNumberOne(e.target.value);
        }}
      />
      <br /> <br />
      <input
        type="number"
        onChange={(e) => {
          props.setNumberTwo(e.target.value);
        }}
      />
      <h2>Soma: {props.resultado} </h2>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    resultado: Number(state.numberOne) + Number(state.numberTwo),
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

export default connect(mapStateToProps, mapActionCreatorToProps)(Sum);
