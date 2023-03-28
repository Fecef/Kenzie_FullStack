import axios from "axios";
import { parseCookies } from 'nookies';
import { setCookie } from "nookies";
import { destroyCookie } from "nookies";

import { IUserLogin } from "@/interfaces/user";
import { successToast, warningToast } from "@/components/Modal/ModalToastfy";
import { IContactPerfil, IFormPerfil, IFormRegister } from "@/components/Form/interface";
import { IContactCreate } from "@/interfaces/contact";


export const api = axios.create({
    baseURL: "http://localhost:3001",
})

export const userAuth = async (userData: IUserLogin) => {
    try {
        const res = await api.post("/login", userData)

        setCookie(null, "kenzie.token", res.data.token, { maxAge: 60 * 30, path: "/" })
        setCookie(null, "kenzie.user", res.data.userId, { maxAge: 60 * 30, path: "/" })

        return res.data

    } catch (err) {
        warningToast("Email ou senha inválidos.")
    }
}

export const userCreate = async (userData: IFormRegister) => {
    const cookies = parseCookies();
    const token = cookies["kenzie.token"];

    try {
        const res = await api.post("/user", userData)

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Email já utilizado.")
    }
}

export const userUpdate = async (userData: IFormPerfil) => {
    const cookies = parseCookies();
    const token = cookies["kenzie.token"];

    try {
        const res = await api.patch("/user", userData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Falha ao alterar os dados.")

    }
}

export const userDelete = async () => {
    const cookies = parseCookies();
    const token = cookies["kenzie.token"];

    try {
        await api.delete("/user", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        destroyCookie(null, "kenzie.token");
        destroyCookie(null, "kenzie.user");

        successToast("Sucesso!")

        return true
    } catch (err) {
        warningToast("Falha ao tentar deletar conta.")

    }
}

export const createContact = async (contactData: IContactCreate) => {
    const cookies = parseCookies();
    const token = cookies["kenzie.token"];

    try {
        const res = await api.post("/user/contact", contactData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Falha ao tentar adicionar novo contato.")

    }
}

export const deleteContact = async (contactId: string) => {
    const cookies = parseCookies();
    const token = cookies["kenzie.token"];

    try {
        await api.delete(`/user/contact/${contactId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        successToast("Sucesso!")

        return true

    } catch (err) {
        warningToast("Falha ao.")

    }
}

export const contactUpdate = async (contactId: string, contactData: IContactPerfil) => {
    const cookies = parseCookies();
    const token = cookies["kenzie.token"];

    try {
        const res = await api.patch(`/user/contact/${contactId}`, contactData, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        successToast("Sucesso!")

        return res.data

    } catch (err) {
        warningToast("Falha ao tentar alterar.")

    }
}