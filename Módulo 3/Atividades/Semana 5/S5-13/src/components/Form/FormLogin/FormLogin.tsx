import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { Button } from "../../Button/Button";
import { Input } from "../../Input/Input";
import { Redirect } from "../../Anchor/Anchor";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";

export interface iLoginInput {
  email: string;
  password: string;
}

export function FormLogin() {
  const { login } = useContext(UserContext);
  const { register, handleSubmit } = useForm<iLoginInput>();

  return (
    <Form onSubmit={handleSubmit(login)}>
      <h1>Login</h1>

      <label>
        E-mail
        <Input
          {...register("email", { required: "Campo obrigatório." })}
          type="email"
          autoComplete="off"
          placeholder="Digite seu e-mail"
          maxLength={30}
        />
        <small></small>
      </label>

      <label>
        Senha
        <Input
          {...register("password", { required: "Campo obrigatório." })}
          type="password"
          placeholder="Digite sua senha"
        />
        <small></small>
      </label>

      <Button type="submit">Entrar</Button>

      <small>Ainda não possui uma conta?</small>

      <Redirect to={"/signup"}>Cadastrar-se</Redirect>
    </Form>
  );
}
