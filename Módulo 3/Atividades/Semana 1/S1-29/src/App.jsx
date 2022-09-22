import "./App.css";
import { useState } from "react";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const addTodo = (newTodo) => setTodo([...todo, newTodo]);
  const handleTodo = (item) => setTodo([...todo.filter((el) => el !== item)]);

  return (
    <div className="App">
      <Form addTodo={addTodo} />
      <TodoList todo={todo} handleTodo={handleTodo} />
    </div>
  );
}

export default App;
