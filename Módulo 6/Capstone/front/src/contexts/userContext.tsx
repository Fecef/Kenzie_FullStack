import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {
  ICepInfo,
  IEmailSubmission,
  IMessageModal,
  IResetPassword,
  IUser,
  IUserContext,
  IUserContextProps,
  IUserLogin,
  IUserRegister,
  IUserUpdate,
} from "../interfaces/user.interface";
import { api } from "../services/api";
import { IAddressUpdate } from "../interfaces/address.interface";
import { toast } from "react-toastify";
import axios from "axios";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState<IUser>();
  const [sessionError, setSessioError] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] =
    useState(false);
  const [isSucessModalOpen, setIsSucessModalOpen] = useState(false);
  const [isSucessResetPasswordModalOpen, setIsSucessResetPasswordModalOpen] =
    useState(false);
  const [cepValue, setCepValue] = useState("");
  const [cepInfo, setCepInfo] = useState<ICepInfo>({ localidade: "", uf: "" });
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [messageModal, setMessageModal] = useState<IMessageModal>({ textHeader: "Ops!", textBody: "CPF Inválido" })

  const [isErrorResetPasswordModalOpen, setIsErrorResetPasswordModalOpen] =
    useState(false);

  const handleClick = (typeModal: string) => {
    if (typeModal === "profile") {
      setIsProfileModalOpen(true);
    }
    if (typeModal === "delete") {
      setIsDeleteAccountModalOpen(true);
      setIsProfileModalOpen(false);
    } else if (typeModal === "address") {
      setIsAddressModalOpen(true);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@kenzieToken") || "invalid";

    try {
      jwt_decode(token);

      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

      userAuth();
    } catch (error) {
      console.error(error);
    }
  }, []);

  async function validateCep() {
    if (cepValue.length === 9 && !cepValue.includes("_")) {
        const zipCodeFormat = cepValue.replace(".", "");
        const url = `https://viacep.com.br/ws/${zipCodeFormat}/json/`;
        const { data } = await axios.get(url);
        if (data.erro) {
            setIsErrorModalOpen(true);
            setMessageModal({
                textHeader: "Ops 😢",
                textBody: "CEP não encontrado"
            })
            setCepInfo({
              localidade: "",
              uf: ""
            })
            return;
        }
        setCepInfo(data);
    }
  }

  async function userAuth() {
    try {
      const res = await api.get("/users/profile");

      localStorage.setItem("@kenzieId", res.data.id);

      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function userSession(data: IUserLogin) {
    try {
      const res = await api.post("/login", data);

      localStorage.setItem("@kenzieToken", res.data.token);
      api.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;

      await userAuth();

      navigate("/");
      setSessioError(false);
    } catch (error) {
      console.error(error);
      setSessioError(true);
    }
  }

  async function userResetPassword(data: IResetPassword, resetToken: string) {
    try {
      const res = await api.patch(`/users/resetPassword/${resetToken}`, data);
      setIsSucessResetPasswordModalOpen(true);
      console.log(res.data);
      setSessioError(false);
    } catch (error) {
      setIsErrorResetPasswordModalOpen(true);
      setSessioError(true);
    }
  }

  async function emailSend(data: IEmailSubmission) {
    try {
      const res = await api.post("/users/resetPassword/", data);
      toast.success("Email enviado com sucesso!");
      setIsSucessResetPasswordModalOpen(true);
      console.log(res.data);

      setSessioError(false);
    } catch (error: any) {
      if (error.response.status === 404) {
        setIsErrorResetPasswordModalOpen(true);
      } else {
        console.log(error.message);
        console.error(error);
      }
    }
  }

  async function userRegister(data: IUserRegister) {
    try {
      const brDate = data.birthdate.split("/");
      const usDate = `${brDate[2]}-${brDate[1]}-${brDate[0]}`;
      data.birthdate = usDate;

      await api.post("/users", data);

      setIsSucessModalOpen(true);
    } catch (error: any) {
      setIsErrorModalOpen(true)
      if (error.response.status === 409) {
        const messageError = error.response.data.message.split(" ")[0]
        setMessageModal({
          textHeader: "Ops! 😢",
          textBody: `${messageError} já existe`,
        })
      } else if (error.response.status === 500) {
        setMessageModal({
          textHeader: "Ops! Ocorreu um erro inesperado 😢",
          textBody: "Por favor. Tente novamente em alguns minutos",
        })
      }
      else {
        console.log(error.message);
      }
    } finally {
      setCepInfo({
        localidade: "",
        uf: ""
      })
    }
  }

  async function userEditProfile(data: IUserUpdate) {
    const token = localStorage.getItem("@kenzieToken");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/users/profile/`, data);
    } catch (err) {
      console.log(err);
    } finally {
      document.location.reload();
    }
  }

  async function userEditAddress(data: IAddressUpdate) {
    const token = localStorage.getItem("@kenzieToken");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.patch(`/users/profile/address`, data);
    } catch(error: any) {
      await validateCep()
    } 
    finally {
      document.location.reload();
    }
  }

  async function userListOne(userId: string | undefined) {
    try {
      const res = await api.get(`/users/${userId}`);

      return res.data;
    } catch (error) {
      console.log(error);
    }
  }

  async function userDelete() {
    const token = localStorage.getItem("@kenzieToken");
    try {
      api.defaults.headers.authorization = `Bearer ${token}`;
      await api.delete(`/users/profile`);
    } catch (err) {
      console.log(err);
    } finally {
      window.localStorage.clear();
      setUser(undefined);
      navigate("/");
    }
  }

  function logout () {
    window.localStorage.clear();
    setUser(undefined);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        sessionError,
        userSession,
        userRegister,
        userListOne,
        userDelete,
        userEditProfile,
        userEditAddress,
        logout,
        handleClick,
        isProfileModalOpen,
        setIsProfileModalOpen,
        isAddressModalOpen,
        setIsAddressModalOpen,
        isDeleteAccountModalOpen,
        setIsDeleteAccountModalOpen,
        isSucessModalOpen,
        setIsSucessModalOpen,
        isErrorModalOpen,
        setIsErrorModalOpen,
        userResetPassword,
        emailSend,
        isSucessResetPasswordModalOpen,
        setIsSucessResetPasswordModalOpen,
        isErrorResetPasswordModalOpen,
        setIsErrorResetPasswordModalOpen,
        messageModal,
        setMessageModal,
        cepValue,
        setCepValue,
        cepInfo,
        setCepInfo,
        validateCep
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
