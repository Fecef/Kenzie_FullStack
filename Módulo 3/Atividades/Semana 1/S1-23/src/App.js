import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Menu } from "./components/Menu/Menu";
import { Card } from "./components/Cards/Cards";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);

  const totalPrice = fruits.reduce((a, b) => a + b.price, 0);

  function filterRedFruits() {
    return setFruits(fruits.filter((el) => el.color === "red"));
  }

  return (
    <div>
      <p>Preço Total = {totalPrice}</p>
      <Menu onClick={filterRedFruits}>
        {fruits.map((el) => (
          <Card fruit={el.name} key={el.name}></Card>
        ))}
      </Menu>
    </div>
  );
}

export default App;
