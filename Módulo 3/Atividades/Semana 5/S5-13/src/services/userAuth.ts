import { successToast } from "./../components/Modal/ModalNotification/ModalNotification";
import { iUser } from "./../contexts/UserContext";
import { kenzieHub } from "./api";

export async function userAuth(): Promise<iUser | undefined> {
  try {
    const res = await kenzieHub.get("/profile");

    successToast(`Bem-vindo, ${res.data.name}! `);
    
    return res.data;
  } catch (e) {
    localStorage.clear();

    return undefined;
  }
}
