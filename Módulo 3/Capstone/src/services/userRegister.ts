import { toast } from "react-toastify";
import { iRegisterInput } from "../components/Form/FormRegister";
import { api } from "./api";

export const userRegister = async (data: iRegisterInput): Promise<boolean> => {
  try {
    await api.post("register", data);

    toast.success("Cadastro realizado com sucesso");

    return true;
  } catch (e) {
    console.log(e);

    toast.error("Email já está em uso.");

    return false;
  }
};
