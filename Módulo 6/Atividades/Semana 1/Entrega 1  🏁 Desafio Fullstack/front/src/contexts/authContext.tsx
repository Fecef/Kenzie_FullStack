import { createContext, useContext } from "react";
import { IProviderProps } from "@/interfaces/context";
import { IUserLogin } from "@/interfaces/user";
import { useRouter } from "next/router";
import * as api from "@/services/api";


interface IAuthProviderData {
    login: (userData: IUserLogin) => void
}

const AuthContext = createContext<IAuthProviderData>({} as IAuthProviderData);

export const AuthProvider = ({ children }: IProviderProps) => {
    const router = useRouter();

    const login = async (userData: IUserLogin) => {
        const res = await api.userAuth(userData)

        if (res) router.push("/dashboard")
    }

    return (
        <AuthContext.Provider value={{ login }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)