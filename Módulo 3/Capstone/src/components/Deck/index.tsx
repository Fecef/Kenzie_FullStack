import { DeckStyled } from "./styled";
import { DeckContext, iDeck } from "../../contexts/DeckContext";
import { useContext } from "react";
import { Rating } from "@mui/material";

interface iDeckProp {
  deck: iDeck;
}
export const Deck = ({ deck: { id, name, rating, url } }: iDeckProp) => {
  const { handlePractice } = useContext(DeckContext);
  return (
    // Container do deck de cards
    <DeckStyled onClick={() => handlePractice(id)} role="button">
      {/* Estrelas com "position: absolute", para que elas fiquem fora do container */}
      <section className="stars">
        <Rating
          readOnly
          precision={0.5}
          value={rating.averageRate}
          sx={{ fontSize: "3rem" }}
        />
      </section>

      <div className="cards">
        <div className="card cardEnd">
          <figure></figure>
        </div>
        <div className="card cardTwo">
          <figure></figure>
        </div>
        <div className="card cardFront">
          <figure>
            {/* <AiFillStar className="icon" /> */}
            <img src={url} alt={`Ícone ${name}`} />
          </figure>
        </div>
      </div>

      <section className="cardName">
        <h3>{name}</h3>
      </section>
    </DeckStyled>
  );
};
