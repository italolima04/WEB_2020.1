import React from "react";

export default function Card(props) {
  return (
    <div className="content">
      <div className="card">
        <div className="card-header">{props.title}</div>
        <div className="card-body">{props.children}</div>
      </div>
    </div>
  );
}
