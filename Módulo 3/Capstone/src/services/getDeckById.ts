import { api } from "./api";

export const getDeckById = async (id: string) => {
  try {
    const token = localStorage.getItem("@TOKEN");
    const res = await api.get(`660/decks/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data.rating;
  } catch (e) {
    console.log(e);
  }
};
