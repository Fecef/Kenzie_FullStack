import logo from "./logo.svg";
import "./App.css";

import { Card } from "./components/Cards/Developer";

function App() {
  const devs = [
    {
      nome: "Gabriel",
      idade: 19,
      pais: "Brasil",
    },
    {
      nome: "Filipe",
      idade: 28,
      pais: "Brasil",
    },
    {
      nome: "Mariana",
      idade: 24,
      pais: "Itália",
    },
  ];

  return (
    <div>
      {devs.map((el) => (
        <Card key={el.nome} name={el.nome} age={el.idade} country={el.pais} />
      ))}
    </div>
  );
}

export default App;
