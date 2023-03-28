import { IContactCreate } from "@/interfaces/contact";
import { IProviderProps } from "@/interfaces/context";
import { createContext, useContext } from "react";
import { useRouter } from "next/router";
import * as api from "@/services/api"
import { IContactPerfil } from "@/components/Form/interface";

interface IContactProviderData {
    addContact: (contactData: IContactCreate) => void;
    removeContact: (contactId: string) => void;
    updateContact: (contactId: string, contactData: IContactPerfil) => void;
}

const ContactContext = createContext<IContactProviderData>({} as IContactProviderData);

export const ContactProvider = ({ children }: IProviderProps) => {
    const router = useRouter()

    const addContact = async (contactData: IContactCreate) => {
        const res = await api.createContact(contactData);

        if (res) router.push("/dashboard")
    }

    const removeContact = async (contactId: string) => {
        const res = await api.deleteContact(contactId);

        if (res) router.push("/dashboard")
    }

    const updateContact = async (contactId: string, contactData: IContactPerfil) => {
        const res = await api.contactUpdate(contactId, contactData);

        if (res) router.push("/dashboard")
    }

    return (
        <ContactContext.Provider value={{ addContact, removeContact, updateContact }}>
            {children}
        </ContactContext.Provider>
    )
}

export const useContact = () => useContext(ContactContext)