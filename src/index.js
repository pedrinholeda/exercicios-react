import React from "react"; // para poder usar JSX (codigo html convertido para js)
import ReactDOM from "react-dom"; // sem o DOM não e possivel jogar os componentes para a pagina
// import PrimeiroComponente from "./componetes/PrimeiroComponente";
// import { CompA, CompB as B } from "./componetes/DoisComponentes";
// import MultiElementos from "./componetes/MultiElementos";
// import FamiliaSiva from "./componetes/FamiliaSilva";
import Familia from "./componetes/Familia";
import Membro from "./componetes/Membro";

const elemento = document.getElementById("root");

ReactDOM.render(
  <div>
    <Familia>
      <Membro nome="Pedro" sobrenome="Leda" />
      <Membro nome="Grazi" sobrenome="Leda" />
    </Familia>

    <Familia>
      <Membro nome="Lucas" sobrenome="Silva" />
      <Membro nome="Junior" sobrenome="Silva" />
    </Familia>

    {/* <FamiliaSiva /> */}

    {/* <MultiElementos></MultiElementos> */}

    {/* <CompA valor="Olá, Bom dia" />
    <B valor=" Componente B" /> */}

    {/* <PrimeiroComponente valor="Bom dia" abc={2 ** 8}></PrimeiroComponente> */}
  </div>,
  elemento
);

// ReactDOM.render(<h1>Teste de JSX</h1>, elemento);
