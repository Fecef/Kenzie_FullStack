import { iLoginInput } from "./../components/Form/FormLogin/FormLogin";
import { kenzieHub } from "./api";
import {
  successToast,
  warningToast,
} from "../components/Modal/ModalNotification/ModalNotification";
import { iUser } from "../contexts/UserContext";
import { LoadingSpinner } from "../components/Spinner/Spinner";

export async function userLogin(data: iLoginInput): Promise<iUser | undefined> {
  try {
    const res = await kenzieHub.post("/sessions", data);

    localStorage.setItem("@TOKEN", res.data.token);

    successToast(`Bem-vindo, ${res.data.user.name}! `);

    return res.data.user;
  } catch (e) {
    warningToast("Falha na autenticação.");

    return undefined;
  }
}
