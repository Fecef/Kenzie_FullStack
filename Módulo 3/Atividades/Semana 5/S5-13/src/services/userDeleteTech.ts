import {
  successToast,
  warningToast,
} from "../components/Modal/ModalNotification/ModalNotification";
import { kenzieHub } from "./api";

export async function userDeleteTech(techId: string): Promise<void> {
  try {
    await kenzieHub.delete(`/users/techs/${techId}`);

    successToast("Tecnologia foi removida.");
  } catch (e) {
    warningToast("Tecnologia já excluída.");
  }
}
