import {
  warningToast,
  successToast,
} from "./../components/Modal/ModalNotification/ModalNotification";
import { iRegisterInput } from "../components/Form/FormRegister/FormRegister";
import { kenzieHub } from "./api";
import { iUser } from "../contexts/UserContext";

export async function userRegister(
  data: iRegisterInput
): Promise<iUser | undefined> {
  try {
    const res = await kenzieHub.post("/users", data);

    successToast("Cadastro realizado com sucesso!");

    return res.data;
  } catch (e) {
    warningToast("E-mail já cadastrado.");

    return undefined;
  }
}
