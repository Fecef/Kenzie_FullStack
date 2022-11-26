import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { iLoginInput } from "../components/Form/FormLogin/FormLogin";
import { iRegisterInput } from "../components/Form/FormRegister/FormRegister";
import { kenzieHub } from "../services/api";
import { userAuth } from "../services/userAuth";
import { userLogin } from "../services/userLogin";
import { userRegister } from "../services/userRegister";
import { SpinnerContext } from "./SpinnerContext";

export interface iTech {
  id: string;
  title: string;
  status: string;
}

export interface iUser {
  id: string;
  name: string;
  email: string;
  course_module: string;
  bio: string;
  contact: string;
  techs: iTech[];
}
interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  user: iUser | undefined;
  login: (data: iLoginInput) => void;
  signup: (data: iRegisterInput) => void;
  logout: () => void;
}

export const UserContext = createContext<iUserContext>({} as iUserContext);

export function UserProvider({ children }: iUserContextProps) {
  const { waiting, doneWaiting } = useContext(SpinnerContext);
  const [user, setUser] = useState<iUser | undefined>(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@TOKEN");

      if (token) {
        kenzieHub.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const res = await userAuth();

        if (res) {
          setUser(res);
        }
      }
    }
    loadUser();
  }, []);

  async function login(data: iLoginInput): Promise<void> {
    waiting();
    const res = await userLogin(data);
    doneWaiting();

    if (res) {
      setUser(res);
      navigate("/dashboard");
    }
  }

  async function signup(data: iRegisterInput) {
    waiting();
    const res = await userRegister(data);
    doneWaiting();

    if (res) navigate("/");
  }

  function logout() {
    localStorage.clear();
    setUser(undefined);
    navigate("/");
  }

  return (
    <UserContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </UserContext.Provider>
  );
}
