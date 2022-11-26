import { api } from "./api";

export const renderCards = async (id: number) => {
  try {
    const token = localStorage.getItem("@TOKEN");
    const {data} = await api.get(`/cards?deckId=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return data
  } catch (e) {
    console.log(e);
    return []
  }
};
