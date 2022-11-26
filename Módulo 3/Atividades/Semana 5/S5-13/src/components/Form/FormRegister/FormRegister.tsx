import { Input } from "../../Input/Input";
import { Form } from "./styles";
import { useForm } from "react-hook-form";
import { schemaRegister } from "../schemas/schemaRegister";
import { yupResolver } from "@hookform/resolvers/yup";
import { InputSelect } from "../../Input/InputSelect";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { Button } from "../../Button/Button";

export interface iRegisterInput {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
  bio: string;
  contact: string;
  course_module: string;
}

export function FormRegister() {
  const { signup } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterInput>({ resolver: yupResolver(schemaRegister) });

  return (
    <Form onSubmit={handleSubmit(signup)}>
      <h1>Crie sua conta</h1>
      <small>Rapido e grátis, vamos nessa</small>

      <label>
        Nome
        <Input
          {...register("name")}
          type="text"
          autoComplete="off"
          maxLength={30}
          placeholder="Digite  seu nome"
        />
        <small>{errors.name?.message}</small>
      </label>

      <label>
        E-mail
        <Input
          {...register("email")}
          type="email"
          autoComplete="off"
          maxLength={30}
          placeholder="Digite  seu e-mail"
        />
        <small>{errors.email?.message}</small>
      </label>

      <label>
        Senha
        <Input
          {...register("password")}
          type="password"
          maxLength={30}
          placeholder="Digite sua senha"
        />
        <small>{errors.password?.message}</small>
      </label>

      <label>
        Confirmar Senha
        <Input
          {...register("confirmPassword")}
          type="password"
          maxLength={30}
          placeholder="Confirme sua senha"
        />
        <small>{errors.confirmPassword?.message}</small>
      </label>

      <label>
        Bio
        <Input
          {...register("bio")}
          type="text"
          autoComplete="off"
          maxLength={100}
          placeholder="Fale sobre você"
        />
        <small>{errors.bio?.message}</small>
      </label>

      <label>
        Contato
        <Input
          {...register("contact")}
          type="text"
          autoComplete="off"
          maxLength={100}
          placeholder="Opção de contato"
        />
        <small>{errors.contact?.message}</small>
      </label>

      <label>
        Selecionar Módulo
        <InputSelect {...register("course_module")}>
          <option value="Primeiro módulo (Introdução ao Frontend)">
            Primeiro módulo (Introdução ao Frontend)
          </option>
          <option value="Segundo módulo (Frontend Avançado)">
            Segundo módulo (Frontend Avançado)
          </option>
          <option value="Terceiro módulo (Introdução ao Backend)">
            Terceiro módulo (Introdução ao Backend)
          </option>
          <option value="Quarto módulo (Backend Avançado)">
            Quarto módulo (Backend Avançado)
          </option>
        </InputSelect>
      </label>

      <Button type="submit">Cadastrar-se</Button>
    </Form>
  );
}
