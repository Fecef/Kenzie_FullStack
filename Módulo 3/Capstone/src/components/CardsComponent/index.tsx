import { CardsStyled } from "./styles";
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FiAlertTriangle } from "react-icons/fi";
import { DeckContext } from "../../contexts/DeckContext";
import { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import { ModalFeedback } from "../Modal";
import { Carroussel } from "../Carousel/Carroussel";

export const ContainerCards = () => {
  const { onPractice, closePractice } = useContext(DeckContext);

  const {
    handlePerfomanceBtn,
    performanceCounter,
    cardList,
    cardIndex,
    isFlipped,
  } = useContext(CardContext);

  return (
    <CardsStyled isFlipped={isFlipped}>
      <div className="close">
        <p onClick={() => closePractice()}>Fechar</p>
      </div>
      <div className="ball ball1"></div>
      <div className="ball ball2"></div>
      <div className="ball ball3"></div>
      <div className="ball ball4"></div>
      {onPractice && (
        <section className="game">
          <h3>
            {" "}
            {cardList.length > 0 ? cardIndex + 1 : 0} de {cardList.length}
          </h3>
          <section className="score">
            <div className="easy">
              <p>{performanceCounter.right}</p>
              <p>Fácil</p>
            </div>
            <div className="doubt">
              <p>{performanceCounter.doubt}</p>
              <p>Duvida</p>
            </div>
            <div className="difficult">
              <p>{performanceCounter.error}</p>
              <p>Difícil</p>
            </div>
          </section>

          <ul className="cardsList card">
            <div className="containerCards">
              <Carroussel cardsList={cardList} currentIndex={cardIndex} />
            </div>
          </ul>

          <div className="buttons">
            <button
              className="button easy"
              title="Lembrei"
              onClick={() => handlePerfomanceBtn("right")}
            >
              <AiOutlineCheck />
            </button>
            <button
              className="button doubt"
              title="Não lembro bem"
              onClick={() => handlePerfomanceBtn("doubt")}
            >
              <FiAlertTriangle />
            </button>
            <button
              className="button difficult"
              title="Não lembrei"
              onClick={() => handlePerfomanceBtn("error")}
            >
              <AiOutlineClose />
            </button>
          </div>
        </section>
      )}
      <ModalFeedback />
    </CardsStyled>
  );
};
