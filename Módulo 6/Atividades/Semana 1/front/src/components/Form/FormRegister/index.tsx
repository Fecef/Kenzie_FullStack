import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../style";
import { IFormRegister } from "../interface";
import { schemaFormRegister } from "../schema";
import { useUser } from "@/contexts/userContext";

export function FormRegister() {
    const { signUp } = useUser();
    const { register, handleSubmit, formState: { errors } } = useForm<IFormRegister>({ resolver: yupResolver(schemaFormRegister) })
    const formSubmit = (data: IFormRegister) => signUp(data);

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>CADASTRO</h2>

            <label>
                Nome Completo
                <input type="text" id="name" autoComplete="off" {...register("name")} />
            </label>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" {...register("email")} />
            </label>

            <label>
                Password
                <input type="password" id="password" {...register("password")} />
            </label>

            <label>
                Celular
                <input type="tel" id="phone" autoComplete="off" {...register("phone")} />
            </label>

            <button type="submit">Enviar</button>
        </Box>
    )
}