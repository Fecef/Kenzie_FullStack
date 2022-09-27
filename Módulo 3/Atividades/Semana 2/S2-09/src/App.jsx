import { useEffect, useState } from "react";
import "./App.css";
import { Characters } from "./components/Characters";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const previousPage = () => setCurrentPage(currentPage - 1 || 1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((res) => res.json())
      .then((res) => setCharacterList(res.results))
      .catch((err) => console.log(err));
  }, [currentPage]);

  return (
    <div className="App">
      <Characters characterList={characterList} />
      <button onClick={previousPage} type="button">
        Voltar
      </button>
      <button onClick={nextPage} type="button">
        Avançar
      </button>
    </div>
  );
}

export default App;
