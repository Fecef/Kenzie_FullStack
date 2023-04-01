import { Props } from "@/pages/dashboard";
import { Box } from "./style";

import { FaEdit } from "react-icons/fa";
import Link from "next/link";

export const Table = ({ contacts }: Props) => {
    return (
        <Box cellSpacing="0">
            <caption>CONTATOS ADICIONADOS</caption>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Contato</th>
                    <th>Adicionado Em</th>
                    <th>Editar/Remover</th>
                </tr>
            </thead>
            <tbody>
                {contacts ?

                    contacts.map((contact, index) => {
                        return (
                            <tr key={index}>
                                <td>{contact.name}</td>
                                <td>{contact.email}</td>
                                <td>{contact.phone}</td>
                                <td>{contact.createdAt}</td>
                                <th><Link href={`./contact/${contact.id}`}><FaEdit className="icon" /></Link></th>
                            </tr>
                        )
                    })
                    :
                    false
                }
            </tbody>
        </Box>
    )
}