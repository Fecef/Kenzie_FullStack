import logo from "../../assets/Logo.svg";
import { ButtonLg, ButtonSm } from "../../styles/button";
import { FormMain } from "../../styles/form";
import { Input, Select } from "../../styles/input";
import { Main } from "./styles";
import { useState } from "react";
import { signup } from "../../services/api";

// Hook Form
import { useForm } from "react-hook-form";
import { BasicModal } from "../../components/Modal/MUI";
//  Reuter Dom
import { Navigate } from "react-router-dom";
//  YUP
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export function Signup({ warningToast, successToast }) {
  const [loading, setLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const formSchema = yup.object().shape({
    email: yup
      .string()
      .email("E-mail inválido.", "^[w-.]+@([w-]+.)+[w-]{2,4}$")
      .required("Campo obrigatório."),
    password: yup
      .string()
      .min("8", "Mínimo de 8 dígitos.")
      .matches("[a-zA-z]", "Necessário ao menos 1 letra.")
      .matches("[0-9]", "Necessário ao menos 1 número")
      .matches("[^A-Za-z0-9]", "Necessário ao menos 1 símbolo.")
      .required("Campo obrigatório."),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "A senhas não são iguais"),
    name: yup.string().required("Campo obrigatório."),
    bio: yup.string().required("Campo obrigatório."),
    contact: yup.string().required("Campo obrigatório."),
    course_module: yup.string().required("Campo obrigatório."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  // Enviando data para API.
  const onSubmit = async (data) => {
    setLoading(true);

    const res = await signup({
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    });

    setLoading(false);

    if (res.length) warningToast("E-mail já esta em uso.");
    if (res.length) return console.log(res);

    setSignupSuccess(true);
    successToast("Cadastro concluído com sucesso!");
  };

  // Redireciona para login.
  if (signupSuccess) return <Navigate to="/" />;

  return (
    <>
      {loading && <BasicModal />}

      <Main>
        <div>
          <img src={logo} alt="Logo" />
          <ButtonSm onClick={() => setSignupSuccess(true)}>Voltar</ButtonSm>
        </div>

        <FormMain onSubmit={handleSubmit(onSubmit)}>
          <h1>Crie sua conta</h1>
          <small>Rapido e grátis, vamos nessa</small>

          <label>
            Nome
            <Input
              {...register("name")}
              type="text"
              name="name"
              autoComplete="off"
              maxLength="30"
              placeholder="Digite  seu nome"
            />
            <small>{errors.name?.message}</small>
          </label>

          <label>
            E-mail
            <Input
              {...register("email")}
              type="email"
              name="email"
              autoComplete="off"
              maxLength="30"
              placeholder="Digite  seu e-mail"
            />
            <small>{errors.email?.message}</small>
          </label>

          <label>
            Senha
            <Input
              {...register("password")}
              type="password"
              name="password"
              maxLength="30"
              placeholder="Digite sua senha"
            />
            <small>{errors.password?.message}</small>
          </label>

          <label>
            Confirmar Senha
            <Input
              {...register("confirmPassword")}
              type="password"
              name="confirmPassword"
              maxLength="30"
              placeholder="Confirme sua senha"
            />
            <small>{errors.confirmPassword?.message}</small>
          </label>

          <label>
            Bio
            <Input
              {...register("bio")}
              type="text"
              name="bio"
              autoComplete="off"
              maxLength="100"
              placeholder="Fale sobre você"
            />
            <small>{errors.bio?.message}</small>
          </label>

          <label>
            Contato
            <Input
              {...register("contact")}
              type="text"
              name="contact"
              autoComplete="off"
              maxLength="100"
              placeholder="Opção de contato"
            />
            <small>{errors.contact?.message}</small>
          </label>

          <label>
            Selecionar Módulo
            <Select name="course_module" {...register("course_module")}>
              <option value="Módulo 1">Módulo 1</option>
              <option value="Módulo 2">Módulo 2</option>
              <option value="Módulo 3">Módulo 3</option>
              <option value="Módulo 4">Módulo 4</option>
              <option value="Módulo 5">Módulo 5</option>
              <option value="Módulo 6">Módulo 6</option>
            </Select>
          </label>

          <ButtonLg type="submit" theme={"color"} disabled={false}>
            Cadastrar
          </ButtonLg>
        </FormMain>
      </Main>
    </>
  );
}
