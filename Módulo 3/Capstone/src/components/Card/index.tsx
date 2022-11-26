import { useContext, useEffect } from "react";
import ReactCardFlip from "react-card-flip";
import { CardContext } from "../../contexts/CardContext";
import { DeckContext, iCards } from "../../contexts/DeckContext";
import { CardBack } from "./CardBack";
import { CardFront } from "./CardFront";

interface iCardProp {
  cardItem: iCards;
  index: number;
}
export const Card = ({ cardItem: { verse, front }, index }: iCardProp) => {
  const { cardIndex, cardList, isFlipped, setIsFlipped } =
    useContext(CardContext);

  const { onPractice } = useContext(DeckContext);

  const flip = () => setIsFlipped(!isFlipped);

  const customStyle = {
    front: {
      color: "var(--color-primary)",
      backgroundColor: "#DADADA",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "16px",
      width: "250px",
      height: "300px",
      boxShadow: "0px 0px 20px rgb(0, 0, 0, 0.5)",
      padding: "30px",
      textAlign: "center",
    },
    back: {
      color: "var(--color-primary)",
      backgroundColor: "#DADADA",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: "16px",
      width: "250px",
      height: "300px",
      boxShadow: "0px 0px 20px rgb(0, 0, 0, 0.5)",
      padding: "30px",
      textAlign: "justify",
    },
  };

  const customContainer = {
    width: "300px",
    height: "300px",
  };

  useEffect(() => {
    setIsFlipped(false);
  }, [cardIndex, cardList, onPractice]);

  useEffect(() => {
    return function unFlip() {
      setIsFlipped(false);
    };
  }, []);

  return (
    <div onClick={() => flip()}>
      <ReactCardFlip
        isFlipped={isFlipped && index == cardIndex}
        flipSpeedBackToFront={0.5}
        flipSpeedFrontToBack={0.5}
        containerStyle={customContainer}
        cardStyles={customStyle}
      >
        <CardFront front={front} key="front" />
        <CardBack verse={verse} key="back" />
      </ReactCardFlip>
    </div>
  );
};
