import {
  successToast,
  warningToast,
} from "./../components/Modal/ModalNotification/ModalNotification";
import { iNewTechInput } from "./../components/Modal/ModalNewTech/ModalNewTech";
import { kenzieHub } from "./api";
import { iTech } from "../contexts/UserContext";

export async function userAddTech(
  data: iNewTechInput
): Promise<iTech | undefined> {
  try {
    const res = await kenzieHub.post("/users/techs", data);

    successToast("Tecnologia adicionada!");

    return res.data;
  } catch (e) {
    warningToast("Tecnologia já existente.");

    return undefined;
  }
}