import React from "react";

export default function ComponenteFilho(props) {
  return (
    <div>
      <h2>Nome: {props.nome}</h2>
      <h3>Curso: {props.curso}</h3>
      <h4>Cidade de Origem: {props.cidade}</h4>
    </div>
  );
}
