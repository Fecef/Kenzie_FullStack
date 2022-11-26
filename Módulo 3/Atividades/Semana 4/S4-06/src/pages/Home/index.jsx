import { Main } from "./styles";
import { Logo } from "./components/Logo";
import { BuscaPokemon } from "./components/BuscaPokemon";
import { MeuTimePokemon } from "./components/MeusPokemons";
import { ListaPokemons } from "./components/ListaPokemons";

import { PokemonProvider } from "../../contexts/PokemonContext";

export function Home() {
  return (
    <Main>
      <Logo />
      <div>
        <PokemonProvider>
          <BuscaPokemon />
          <MeuTimePokemon />
          <ListaPokemons />
        </PokemonProvider>
      </div>
    </Main>
  );
}
