import { useContext } from "react";
import { Section, AddIcon } from "./styles";
import { PokemonContext } from "../../../../contexts/PokemonContext";

export function ListaPokemons() {
  const { pokemons, pokedex, setPokedex } = useContext(PokemonContext);

  return (
    <Section>
      <h2>Lista de Pokemons</h2>
      <hr />

      <ul>
        {pokemons.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
            <AddIcon onClick={() => setPokedex([...pokedex, pokemon])} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
