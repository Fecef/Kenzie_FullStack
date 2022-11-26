import React, { createContext, useContext, useEffect, useState } from "react";
import { ReactNode } from "react";
import { renderCards } from "../services/cards";
import { getDeckList } from "../services/getDecks";
import { UserContext } from "./UserContext";

interface iDeckProviderProps {
  children: ReactNode;
}

interface iDeckContext {
  filteredDecks: iDeck[];
  deckFilter: iDeckFilter;
  filterChange(filter: iDeckFilter): void;
  cards: iCards[];
  handlePractice: (deck: number) => void;
  shuffleCards: (deck: iCards[]) => iCards[];
  onPractice: boolean;
  closePractice: () => void;
}

export interface iRating {
  totalRating: number;
  amount: number;
  averageRate: number;
}

export interface iCards {
  deckId: number;
  front: string;
  verse: string;
  id: number;
}

export interface iDeck {
  userId: string;
  name: string;
  level: string;
  id: number;
  rating: iRating;
  url?: string;
}

interface iDeckFilter {
  name: string;
  level: string;
}

export const DeckContext = createContext<iDeckContext>({} as iDeckContext);

export const DeckProvider = ({ children }: iDeckProviderProps) => {
  const { user } = useContext(UserContext);

  const [decks, setDecks] = useState<iDeck[]>([] as iDeck[]);

  const [filteredDecks, setFilteredDecks] = useState<iDeck[]>([] as iDeck[]);

  const [cards, setCards] = useState<iCards[]>([] as iCards[]);

  const [onPractice, setOnPractice] = useState(false);

  const [deckFilter, setDeckFilter] = useState<iDeckFilter>({
    name: "",
    level: "",
  });

  const attDecks = async () => {
    const deckList = await getDeckList();
    setDecks(deckList);
  };

  useEffect(() => {
    user && attDecks();
  }, [user]);

  const handlePractice = async (deck: number) => {
    setOnPractice(true);
    const cardsApi = await renderCards(deck);
    const randomizedCards = shuffleCards(cardsApi);

    const filteredCards = randomizedCards.filter(
      (card: iCards) => card?.deckId === deck
    );
    setCards(filteredCards);
  };

  const closePractice = () => {
    setOnPractice(false);
  };

  const filterChange = (filter: iDeckFilter): void => setDeckFilter(filter);

  useEffect(() => {
    const newDeckList = decks.filter(
      ({ name, level }) =>
        name.toLowerCase().includes(deckFilter.name.toLowerCase().trim()) &&
        (deckFilter.level
          ? level.toLowerCase() == deckFilter.level.toLowerCase()
          : true)
    );

    setFilteredDecks(newDeckList);
  }, [deckFilter, decks]);

  const shuffleCards = (deck: iCards[]) => {
    for (let index = deck.length - 1; index > 0; index--) {
      const item = Math.floor(Math.random() * (index + 1));

      [deck[index], deck[item]] = [deck[item], deck[index]];
    }
    return deck;
  };

  return (
    <DeckContext.Provider
      value={{
        filteredDecks,
        deckFilter,
        filterChange,
        cards,
        handlePractice,
        shuffleCards,
        onPractice,
        closePractice,
      }}
    >
      {children}
    </DeckContext.Provider>
  );
};
