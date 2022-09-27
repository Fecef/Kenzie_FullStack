import { useEffect, useState } from "react";
import { GlobalStyle } from "./styles/global";
import "./App.css";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Characters characterList={characterList} />
    </div>
  );
}

export default App;
