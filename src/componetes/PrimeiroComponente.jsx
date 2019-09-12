import React from "react";

let isLegal = true;
//props -> para usar propriedades dentro de componentes personalizados
export default props => (
  <div>
    <h1>{props.valor}</h1>
    <h1>{props.abc}</h1>
    <p>Legal ? {isLegal ? "Sim" : "Não"}</p>
    <p>Numero Aleatorio: {Math.random()}</p>
  </div>
);

// export default () => (
//   <div>
//     <h1>Primeiro Componente (Arrow)</h1>
//   </div>
// );

// export default function() {
//   return <h1>Primeiro Componente</h1>;
// }

// function primeiro() {
//   return <h1>Primeiro Componente</h1>;
// }
// export default primeiro;
