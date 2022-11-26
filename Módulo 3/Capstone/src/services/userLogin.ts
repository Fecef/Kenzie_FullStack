import { iUser } from "./../contexts/UserContext";
import { toast } from "react-toastify";
import { iLoginInput } from "../components/Form/FormLogin";
import { api } from "./api";

export const userLogin = async (
  data: iLoginInput
): Promise<iUser | undefined> => {
  try {
    const res = await api.post("login", data);

    toast.success("Login realizado com sucesso");

    localStorage.setItem("@TOKEN", res.data.accessToken);
    localStorage.setItem("@userId", res.data.user.id);

    return res.data.user;
  } catch (e) {
    console.log(e);

    toast.error("Acesso não autorizado.");
  }
};
