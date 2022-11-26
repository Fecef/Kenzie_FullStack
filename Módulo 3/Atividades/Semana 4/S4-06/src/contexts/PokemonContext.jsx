import { createContext, useEffect, useState } from "react";
import { apiGetPokemons } from "../services/api";

export const PokemonContext = createContext({});

export function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);

  useEffect(() => {
    const getPokemons = async () => setPokemons(await apiGetPokemons());
    getPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ pokemons, setPokemons, pokedex, setPokedex }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
