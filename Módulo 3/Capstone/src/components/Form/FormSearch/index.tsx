import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { DeckContext } from "../../../contexts/DeckContext";
import { StyleContainerSearch } from "./styles";

export const Search = () => {
  const { filterChange, deckFilter } = useContext(DeckContext);
  return (
    <StyleContainerSearch>
      <div className="searchContainer">
        <input
          type="text"
          value={deckFilter.name}
          placeholder="Ex: Javascript"
          onChange={(event) => {
            filterChange({ ...deckFilter, name: event.target.value });
          }}
        />
        <BsSearch />
      </div>
      
      <select
        onChange={(event) => {
          filterChange({ ...deckFilter, level: event.target.value });
        }}
      >
        <option value="">Todos</option>
        <option value="fácil">Fácil</option>
        <option value="médio">Médio</option>
        <option value="difícil">Avançado</option>
      </select>
    </StyleContainerSearch>
  );
};
