import { iDeck, iRating } from "../contexts/DeckContext";
import { api } from "./api";

export const patchDeckById = async (
  id: string,
  data: iRating
): Promise<iDeck> => {
  const res = await api.patch(`660/decks/${id}`, { rating: data });

  return res.data;
};
