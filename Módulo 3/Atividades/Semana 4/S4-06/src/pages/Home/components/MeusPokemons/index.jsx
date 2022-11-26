import { useContext } from "react";
import { PokemonContext } from "../../../../contexts/PokemonContext";
import { Section, TrashIcon } from "./styles";

export function MeuTimePokemon() {
  const { pokedex, setPokedex } = useContext(PokemonContext);

  function removeFromPokedex(pokemon) {
    const newPokedex = pokedex.filter((poke) => poke !== pokemon);
    setPokedex(newPokedex);
  }

  return (
    <Section>
      <h2>Meu Time de Pokemons</h2>
      <hr />
      <ul>
        {pokedex.map((pokemon) => (
          <li key={pokemon.name}>
            {pokemon.name}
            <TrashIcon onClick={() => removeFromPokedex(pokemon)} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
