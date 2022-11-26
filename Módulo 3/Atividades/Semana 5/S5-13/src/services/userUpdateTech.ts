import { iFormUpdateInput } from "../components/Modal/ModalUpdateTech/ModalUpdateTech";
import {
  successToast,
  warningToast,
} from "./../components/Modal/ModalNotification/ModalNotification";
import { kenzieHub } from "./api";

export async function userUpdateTech(
  techId: string | undefined,
  data: iFormUpdateInput
): Promise<void> {
  try {
    await kenzieHub.put(`/users/techs/${techId}`, data);

    successToast("Status foi atualizado.");
  } catch (e) {
    warningToast("Falha na tentativdad de atualização.");
  }
}
