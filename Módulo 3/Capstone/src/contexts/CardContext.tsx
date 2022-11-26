import { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { getDeckById } from "../services/getDeckById";
import { patchDeckById } from "../services/patchDeckById";
import { DeckContext, iCards } from "./DeckContext";

interface iCardProviderProps {
  children: ReactNode;
}

interface iCardContext {
  handlePerfomanceBtn(keykey: "error" | "doubt" | "right"): void;
  performanceCounter: iPerformanceCounter;
  cardList: iCards[];
  cardIndex: number;
  showModal: boolean;
  closeModalFeedback(): void;
  messageModal: string;
  emojiModal: string;
  isFlipped: boolean;
  setIsFlipped(boolean: boolean): void;
  rateDeck: (value: number | null) => void;
}

interface iPerformanceCounter {
  error: number;
  doubt: number;
  right: number;
  total: number;
}

export const CardContext = createContext({} as iCardContext);

export const CardProvider = ({ children }: iCardProviderProps) => {
  const { cards, closePractice, onPractice } = useContext(DeckContext);

  const [cardList, setCardList] = useState<iCards[]>(cards || ([] as iCards[])); //Setado como [] para resolver o conflito caso cards == null

  const [cardIndex, setCardIndex] = useState(0);

  const [showModal, setShowModal] = useState(false);

  const [messageModal, setmessageModal] = useState("");

  const [emojiModal, setEmojiModal] = useState("");

  const [performanceCounter, setPerformanceCounter] =
    useState<iPerformanceCounter>({
      error: 0,
      doubt: 0,
      right: 0,
      total: 0,
    });

  const [isFlipped, setIsFlipped] = useState(false);

  const handlePerfomanceBtn = (key: "error" | "doubt" | "right") => {
    if (performanceCounter.total < cardList.length && isFlipped) {
      setPerformanceCounter({
        ...performanceCounter,
        [key]: performanceCounter[key] + 1,
        total: performanceCounter.total + 1,
      });
      performanceCounter.total + 1 < cardList.length &&
        setCardIndex(cardIndex + 1);
    }
  };

  const percentCardCalc = (value: number) =>
    Math.floor(+((value * 100) / performanceCounter.total));

  const perfomanceFeedback = () => {
    if (performanceCounter.total == cardList.length && cardList.length > 0) {
      if (percentCardCalc(performanceCounter.right) >= 60) {
        setShowModal(true);
        setEmojiModal(
          "https://emojipedia-us.s3.amazonaws.com/source/noto-emoji-animations/344/party-popper_1f389.gif"
        );
        setmessageModal(
          `Parabéns, você acertou ${percentCardCalc(
            performanceCounter.right
          )}% das cartas!`
        );
      } else if (percentCardCalc(performanceCounter.error) >= 60) {
        setShowModal(true);
        setEmojiModal(
          "https://i.pinimg.com/originals/25/ed/47/25ed4723801259d0516c60978603894a.gif"
        );
        setmessageModal(
          `Você errou ${percentCardCalc(
            performanceCounter.error
          )}% das cartas, quanto mais treinar melhor irá consolidar estes conceitos!`
        );
      } else {
        const rights = percentCardCalc(performanceCounter.right);
        const errors = percentCardCalc(performanceCounter.error);
        const doubts = percentCardCalc(performanceCounter.doubt);
        setShowModal(true);
        setEmojiModal("https://www.emojiall.com/images/240/telegram/1f914.gif");
        setmessageModal(
          `Você ${
            (rights > 0 ? `acertou em ${rights}%, ` : "") +
            (errors > 0 ? `errou em ${errors}%${doubts > 0 ? ", " : ""}` : "") +
            (doubts > 0 ? `teve dúvidas em ${doubts}%` : "")
          } das cartas, quanto mais treinar melhor irá consolidar estes conceitos!`
        );
      }
    }
  };

  useEffect(() => {
    perfomanceFeedback();
  }, [performanceCounter]);

  useEffect(() => {
    setCardList(cards || []);
    setPerformanceCounter({
      error: 0,
      doubt: 0,
      right: 0,
      total: 0,
    });
    setCardIndex(0);
  }, [cards, onPractice]);

  const closeModalFeedback = () => {
    setShowModal(false);
    closePractice();
  };

  const rateDeck = async (value: number | null) => {
    const cardId = cardList[0].deckId + "";
    const { totalRating, amount } = await getDeckById(cardId);
    const total = totalRating + value;
    const quantity = amount + 1;
    const averageRate = total / quantity;

    const data = {
      totalRating: total,
      amount: quantity,
      averageRate: averageRate,
    };

    patchDeckById(cardId, data);
    closeModalFeedback();
  };

  return (
    <CardContext.Provider
      value={{
        handlePerfomanceBtn,
        performanceCounter,
        cardList,
        cardIndex,
        showModal,
        closeModalFeedback,
        messageModal,
        emojiModal,
        isFlipped,
        setIsFlipped,
        rateDeck,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
