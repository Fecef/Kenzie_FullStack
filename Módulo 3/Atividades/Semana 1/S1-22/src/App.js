import logo from "./logo.svg";
import "./App.css";

import { Counter } from "./components/Counter/Counter";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  function randomNumber() {
    return setNumber(Math.floor(Math.random() * 100) + 1);
  }

  return (
    <div className="App">
      <Counter fn={randomNumber}>
        <span>{number}</span>
      </Counter>
    </div>
  );
}

export default App;
