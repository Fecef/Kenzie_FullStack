import { H2, Img, Li } from "./styles";

export function CharCard({ character }) {
  return (
    <Li>
      <H2>{character.name}</H2>
      <Img src={character.image} alt={character.name} />
    </Li>
  );
}
