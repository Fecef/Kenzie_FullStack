import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { Box } from "../style";
import { IFormLogin } from "../interface";
import { schemaFormLogin } from "../schema";
import { useAuth } from "@/contexts/authContext";

export function FormLogin() {
    const { login } = useAuth()
    const { register, handleSubmit, formState: { errors } } = useForm<IFormLogin>({ resolver: yupResolver(schemaFormLogin) })
    const formSubmit = (data: IFormLogin) => login(data);

    return (
        <Box onSubmit={handleSubmit(formSubmit)}>
            <h2>LOGIN</h2>

            <label>
                Email
                <input type="email" id="email" autoComplete="off" {...register("email")} />
            </label>

            <label>
                Password
                <input type="password" id="password" {...register("password")} />
            </label>

            <button type="submit">Enviar</button>
        </Box>
    )
}