import { NewTodoForm } from "./components/NewTodoForm";
import { Todos } from "./components/Todos";

function App() {
  return (
    <div className="App">
      <Todos />
      <NewTodoForm />
    </div>
  );
}

export default App;
