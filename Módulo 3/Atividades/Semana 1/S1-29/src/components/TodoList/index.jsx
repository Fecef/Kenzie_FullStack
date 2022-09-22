import "./style.css";

export function TodoList({ todo, handleTodo }) {
  return (
    <menu>
      {todo.map((el, i) => (
        <li key={i}>
          {el}

          <button onClick={() => handleTodo(el)} type="button">
            Concluir Tarefa
          </button>
        </li>
      ))}
    </menu>
  );
}
