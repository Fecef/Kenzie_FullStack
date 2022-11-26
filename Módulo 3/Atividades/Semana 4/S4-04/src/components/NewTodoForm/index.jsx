import { useContext, useState } from "react";
import { TodosContext } from "../../contexts/todos";

export function NewTodoForm() {
  const [task, setTask] = useState("");
  const { saveNewTodo } = useContext(TodosContext);

  function handleSaveNewTask(e) {
    e.preventDefault();

    saveNewTodo(task);
  }

  return (
    <form onSubmit={handleSaveNewTask}>
      <input
        type="text"
        placeholder="Exemplo: Estudar"
        value={task}
        onChange={(event) => setTask(event.target.value)}
      />

      <button type="submit">Criar nova tarefa</button>
    </form>
  );
}
