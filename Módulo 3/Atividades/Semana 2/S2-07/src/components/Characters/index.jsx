import { CharCard } from "../CharCard";
import { H2, Menu } from "./styles";

export function Characters({ characterList }) {
  return (
    <>
      <H2>Meus personagens</H2>

      <Menu>
        {characterList.map((character) => (
          <CharCard character={character} key={character.id} />
        ))}
      </Menu>
    </>
  );
}
