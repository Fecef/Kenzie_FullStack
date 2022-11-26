import { SearchForm } from "./styles/form";
import "./App.css";
import { Menu } from "./styles/menu";
import { useForm } from "react-hook-form";
import { getOrg } from "./services/api";
import { useState } from "react";

function App() {
  const { register, handleSubmit } = useForm();
  const [user, setUser] = useState("");

  const onSubmit = async ({ name, repos }) => {
    const res = await getOrg(name, repos);
    setUser(res.data);
  };

  return (
    <div className="App">
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <label>
          Usuário / Organização
          <input
            {...register("name")}
            type="text"
            name="name"
            id="name"
            autoComplete="off"
          />
        </label>
        <label>
          Repositório
          <input
            {...register("repos")}
            type="text"
            name="repos"
            id="repos"
            autoComplete="off"
          />
        </label>
        <button type="submit">Buscar</button>
      </SearchForm>

      <Menu>
        <li>
          <img src={user.owner.avatar_url} alt={user.name} />
          <h1>{user.name}</h1>
          <p>{user.description}</p>
        </li>
      </Menu>
    </div>
  );
}

export default App;
