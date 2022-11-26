import example from "../../assets/example.png";
import { OffPracticeContainerStyled } from "./styles";
export const OffPracticeContainer = () => {
  return (
    <OffPracticeContainerStyled>
      <img src={example} alt="deck" />
      <h1>Escolha um deck para começar a praticar!</h1>
    </OffPracticeContainerStyled>
  );
};
