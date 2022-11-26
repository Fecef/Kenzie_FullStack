import { Rating } from "@mui/material";
import { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";
import { ModalContainer } from "./style";

export const ModalFeedback = () => {
  const { rateDeck, showModal, closeModalFeedback, messageModal, emojiModal } =
    useContext(CardContext);

  if (!showModal) return null;

  return (
    <ModalContainer>
      <div>
        <button onClick={() => closeModalFeedback()}>X</button>
        <img src={emojiModal} alt="gif" />
        <h1>{messageModal}</h1>
        <div className="containerRating">
          <h2>Como você avalia esse deck?</h2>
          <div>
            <Rating
              precision={0.5}
              value={0}
              sx={{ fontSize: "4rem", color: "#faaf00" }}
              onChange={(_, value) => rateDeck(value)}
            />
          </div>
        </div>
      </div>
    </ModalContainer>
  );
};
