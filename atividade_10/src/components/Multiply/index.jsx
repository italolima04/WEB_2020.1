import React from "react";

import { Card } from "react-bootstrap";

import { connect } from "react-redux";

function Multiply(props) {
  return (
    <div>
      <Card
        style={{
          background: "#fff",
          height: "110px",
          width: "280px",
          margin: "25px",
          border: "2px groove black",
          borderRadius: "7px",
        }}
      >
        <Card.Header as="h2">Multiplicação</Card.Header>
        <Card.Body>
          <Card.Text>
            <h2>{props.resultado}</h2>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    resultado: state.numberOne * state.numberTwo,
  };
}

export default connect(mapStateToProps)(Multiply);
