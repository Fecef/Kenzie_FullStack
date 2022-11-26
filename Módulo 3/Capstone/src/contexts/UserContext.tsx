import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginInput } from "../components/Form/FormLogin";
import { iRegisterInput } from "../components/Form/FormRegister";
import { api } from "../services/api";
import { userAuth } from "../services/userAuth";
import { userLogin } from "../services/userLogin";
import { userRegister } from "../services/userRegister";

export interface iUser {
  id: string;
  name: string;
  email: string;
  confPassword: string;
}

interface iUserProviderProps {
  children: React.ReactNode;
}

interface iUserContext {
  user: iUser | null;
  onRegister: (data: iRegisterInput) => void;
  onLogin: (data: iLoginInput) => void;
  setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserProviderProps) {
  const [user, setUser] = useState<iUser | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const getUserAuth = async () => {
      const token = localStorage.getItem("@TOKEN");
      const id = localStorage.getItem("@userId");

      if (token) {
        api.defaults.headers.common["Authorization"] = `Bearer ${token}`;

        const res = await userAuth(id);

        if (res) {
          setUser(res);
          navigate("/dashboard");
        }
      } else {
        localStorage.clear();
        navigate("/");
      }
    };
    getUserAuth();
  }, []);

  const onRegister = async (data: iRegisterInput) => {
    const res = await userRegister(data);

    if (res) {
      navigate("/");
    }
  };

  const onLogin = async (data: iLoginInput) => {
    const res = await userLogin(data);

    if (res) {
      setUser(res);
      navigate("/dashboard");
    }
  };

  return (
    <UserContext.Provider
      value={{ isDarkMode, setIsDarkMode, user, onRegister, onLogin, setUser }}
    >
      {children}
    </UserContext.Provider>
  );
}
