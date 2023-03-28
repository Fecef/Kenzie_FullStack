
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { pickBy } from "lodash";

import { Box } from "../style";
import { IFormPerfil } from "../interface";
import { schemaFormPerfil } from "../schema";
import { Props } from "@/pages/perfil";
import { useUser } from "@/contexts/userContext";


export function FormPerfil({ user }: Props) {
    const { update, deleteUser } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm<IFormPerfil>({ resolver: yupResolver(schemaFormPerfil), shouldUnregister: true })

    const formSubmit = (data: IFormPerfil) => {
        const sanitaziedData = pickBy(data, value => value!.length > 0);
        console.log(user);
        
        update(sanitaziedData)
    };

    const handleDelete = () => {
        deleteUser()
    }

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>ALTERAR DADOS</h2>

            <label>
                Nome Completo
                <input type="text" id="name" autoComplete="off" placeholder={user.name}{...register("name")} />
            </label>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" placeholder={user.email}{...register("email")} />
            </label>

            <label>
                Password
                <input type="password" id="password" {...register("password")} />
            </label>

            <label>
                Celular
                <input type="tel" id="phone" autoComplete="off" placeholder={user.phone}{...register("phone")} />
            </label>

            <button type="submit">Alterar</button>
            <button className="delete" type="button" onClick={() => handleDelete()}>Encerrar Conta</button>
        </Box>
    )
}