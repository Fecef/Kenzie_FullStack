import "./style.css";
import { useState } from "react";

export function Form({ addTodo }) {
  const [userInput, setUserInput] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault(addTodo(userInput))}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={userInput}
        onChange={(e) => setUserInput(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
