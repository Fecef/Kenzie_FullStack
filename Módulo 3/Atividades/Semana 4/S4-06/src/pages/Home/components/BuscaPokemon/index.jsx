import { useContext } from "react";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../../../contexts/PokemonContext";
import { Section } from "./styles";

export function BuscaPokemon() {
  const { pokemons, pokedex, setPokedex } = useContext(PokemonContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = ({ pokeName }) => {
    const itsAPokemon = pokemons.find((pokemon) => pokemon.name === pokeName);

    if (itsAPokemon) setPokedex([...pokedex, itsAPokemon]);
  };

  return (
    <Section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Buscar meu Pokemon</h2>

        <label>
          Nome do Pokemon
          <input {...register("pokeName")} type="text" name="pokeName" />
        </label>

        <button type="submit">Adicionar</button>
      </form>
    </Section>
  );
}
