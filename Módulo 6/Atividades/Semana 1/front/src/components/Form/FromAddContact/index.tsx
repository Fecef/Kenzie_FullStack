import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../style";
import { schemaFormAddContact } from "../schema";
import { useContact } from "@/contexts/contactContext";
import { IContactCreate } from "@/interfaces/contact";

export function FormAddContact() {
    const { addContact } = useContact();
    const { register, handleSubmit, formState: { errors } } = useForm<IContactCreate>({ resolver: yupResolver(schemaFormAddContact) })
    const formSubmit = (data: IContactCreate) => addContact(data);

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>NOVO CONTATO</h2>

            <label>
                Nome Completo
                <input type="text" id="name" autoComplete="off" {...register("name")} />
            </label>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" {...register("email")} />
            </label>

            <label>
                Celular
                <input type="tel" id="phone" autoComplete="off" {...register("phone")} />
            </label>

            <button type="submit">Adicionar</button>
        </Box>
    )
}
