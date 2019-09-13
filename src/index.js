import React from "react"; // para poder usar JSX (codigo html convertido para js)
import ReactDOM from "react-dom"; // sem o DOM não e possivel jogar os componentes para a pagina
// import PrimeiroComponente from "./componetes/PrimeiroComponente";
// import { CompA, CompB as B } from "./componetes/DoisComponentes";
// import MultiElementos from "./componetes/MultiElementos";
// import FamiliaSiva from "./componetes/FamiliaSilva";
// import Familia from "./componetes/Familia";
// import Membro from "./componetes/Membro";
// import ComponenteComFuncao from "./componetes/ComponenteComFuncao";
// import Pai from "./componetes/Pai";
// import ComponenteClasse from "./componetes/ComponenteClasse";
import Contador from "./componetes/Contador";

const elemento = document.getElementById("root");

ReactDOM.render(
  <div>
    <Contador numeroInicial={100} />

    {/* <ComponenteClasse valor="Componente de Classe" /> */}

    {/* <Pai /> */}
    {/* <h2>Aprovados</h2>
    <ComponenteComFuncao /> */}

    {/* <Familia sobrenome=" Léda">
      <Membro nome="Pedro" />
      <Membro nome="Grazi" />
    </Familia> */}

    {/* <Familia>
      <Membro nome="Lucas" sobrenome="Silva" />
      <Membro nome="Junior" sobrenome="Silva" />
    </Familia> */}

    {/* <FamiliaSiva />

    {/* <MultiElementos></MultiElementos> */}

    {/* <CompA valor="Olá, Bom dia" />
    <B valor=" Componente B" /> */}

    {/* <PrimeiroComponente valor="Bom dia" abc={2 ** 8}></PrimeiroComponente> */}
  </div>,
  elemento
);

// ReactDOM.render(<h1>Teste de JSX</h1>, elemento);
