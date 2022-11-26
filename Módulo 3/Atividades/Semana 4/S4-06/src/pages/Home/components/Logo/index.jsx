import logo from "../../../../assets/pokeball.svg";
import { H1 } from "./styles";

export function Logo() {
  return (
    <H1>
      Minha{" "}
      <span>
        Pokedex <img src={logo} alt="Logo" />
      </span>
    </H1>
  );
}
