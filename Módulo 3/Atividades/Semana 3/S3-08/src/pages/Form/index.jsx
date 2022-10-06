import { Form, Section } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export function FormUser() {
  const [userData, setUserData] = useState({});

  const formSchema = yup.object().shape({
    userName: yup
      .string()
      .required("Apelido obrigatório.")
      .matches("[a-zA-Z]", "Apenas letras."),
    completeName: yup.string().required("Nome obrigatório."),
    email: yup.string().required("Email obrigatório."),
    confirmEmail: yup.string().required("Confiem seu email."),
    pass: yup.string().required("Senha inválida."),
    confirmPass: yup.string().required("Senha não é igual."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => setUserData(data);

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <h1>Formulário</h1>
        <input
          type="text"
          placeholder="Nome de usuário*"
          maxLength="18"
          autoComplete="off"
          {...register("userName")}
        />
        {errors.userName?.message}
        <input
          type="text"
          placeholder="Nome completo*"
          maxLength="18"
          autoComplete="off"
          {...register("completeName")}
        />
        {errors.completeName?.message}
        <input
          type="email"
          placeholder="Endereço de email*"
          autoComplete="off"
          {...register("email")}
        />
        {errors.email?.message}
        <input
          type="email"
          placeholder="Confirme seu email*"
          autoComplete="off"
          {...register("emailConfirm")}
        />
        {errors.confirmEmail?.message}
        <div>
          <fieldset>
            <legend>Senha</legend>
            <input type="password" {...register("pass")} />
          </fieldset>
          {errors.pass?.message}
          <fieldset>
            <legend>Confirme sua senha*</legend>
            <input type="password" {...register("confirmPass")} />
          </fieldset>
          {errors.confirmPass?.message}
        </div>

        <button type="submit">CADASTRAR</button>
      </Form>

      <Section>
        <h1>Confirmação de Dados</h1>
        <hr />
        <menu>
          <li>Usuário: {userData.userName}</li>
          <li>Nome Completo:{userData.completeName}</li>
          <li>Email:{userData.email}</li>
          <li>Senha:{userData.pass}</li>
        </menu>
      </Section>
    </>
  );
}
