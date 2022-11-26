import { iUser } from "./../contexts/UserContext";
import { api } from "./api";

export const userAuth = async (id: string | null): Promise<iUser | null> => {
  try {
    const res = await api.get(`600/users/${id}`);

    return res.data;
  } catch (e) {
    console.log(e);

    localStorage.clear();

    return null;
  }
};
