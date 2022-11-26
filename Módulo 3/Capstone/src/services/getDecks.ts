import { api } from "./api";
import { iDeck } from "../contexts/DeckContext";

export const getDeckList = async (): Promise<iDeck[]> => {
  try {
    const token = localStorage.getItem("@TOKEN");
    const { data } = await api.get("/decks", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return data;
  } catch (e) {
    console.log(e);
    return [];
  }
};
