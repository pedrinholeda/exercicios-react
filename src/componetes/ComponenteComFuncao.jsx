import React from "react";

export default props => {
  const aprovados = ["Pedro", "Gabriel", "Filipe", "Gabriel"];

  const gerarItens = itens => {
    return itens.map(item => <li>{item}</li>);
  };
  return <ul>{gerarItens(aprovados)}</ul>;
};
