import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { pickBy } from "lodash";

import { Box } from "../style";
import { IContactPerfil } from "../interface";
import { schemaFormUpdateContact } from "../schema";
import { Props } from "@/pages/contact/[id]";
import { useContact } from "@/contexts/contactContext";

const FormUpdateContact = ({ contact, id }: Props) => {
    const { updateContact, removeContact } = useContact();
    const { register, handleSubmit, formState: { errors } } = useForm<IContactPerfil>({ resolver: yupResolver(schemaFormUpdateContact) })

    const formSubmit = (data: IContactPerfil) => {
        const sanitaziedData = pickBy(data, value => value!.length > 0);
        updateContact(id, sanitaziedData)
    };

    const handleDelete = () => {
        removeContact(id)
    }

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>ALTERAR CONTATO</h2>

            <label>
                Nome Completo
                <input type="text" id="name" autoComplete="off" placeholder={contact.name} {...register("name")} />
            </label>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" placeholder={contact.email} {...register("email")} />
            </label>

            <label>
                Celular
                <input type="tel" id="phone" autoComplete="off" placeholder={contact.phone} {...register("phone")} />
            </label>

            <button type="submit">Alterar</button>
            <button className="delete" type="button" onClick={() => handleDelete()}>Encerrar Conta</button>
        </Box>
    )
}

export default FormUpdateContact;