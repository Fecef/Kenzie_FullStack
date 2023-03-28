import { useRouter } from "next/router";
import nookies from "nookies"

import { createContext, useContext } from "react";
import { IFormPerfil, IFormRegister } from "@/components/Form/interface";
import { IProviderProps } from "@/interfaces/context";
import * as api from "@/services/api";


interface IUserProviderData {
    signUp: (userData: IFormRegister) => void;
    update: (userData: IFormPerfil) => void;
    deleteUser: () => void;
}

const UserContext = createContext<IUserProviderData>({} as IUserProviderData);

export const UserProvider = ({ children }: IProviderProps) => {
    const router = useRouter();

    const signUp = async (userData: IFormRegister) => {
        const res = await api.userCreate(userData);

        if (res) router.push("/");
    }

    const update = async (userData: IFormPerfil) => {
        await api.userUpdate(userData);

        router.push("/dashboard")
    }

    const deleteUser = async () => {
        const res = await api.userDelete();

        if (res) router.push("/")
    }

    return (
        <UserContext.Provider value={{ signUp, update, deleteUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext)