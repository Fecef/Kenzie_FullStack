import { Form } from "./styles";
import { ButtonLg } from "../../styles/button";
import { Input, Select } from "../../styles/input";
import { useContext, useState } from "react";
import { successToast, warningToast } from "../Modal/Toastfy";
import { AccountContext } from "../../contexts/AccountContext";
import { useForm } from "react-hook-form";
import { LoadingModal } from "../Modal/MUI";
import { useNavigate } from "react-router-dom";
import { userLogin, userSignup } from "../../services/api";
import { yupResolver } from "@hookform/resolvers/yup";
import { signupSchema } from "./schemas";
import { Redirect } from "../../pages/Home/styles";

export function FormLogin() {
  const { setUser } = useContext(AccountContext);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    const res = await userLogin({
      email: data.email,
      password: data.password,
    });
    setLoading(false);

    if (res.length) return warningToast("Credênciais inválidas.");

    setUser(res.user);
    localStorage.clear();
    localStorage.setItem("@TOKEN", res.token);
    localStorage.setItem("@USERID", res.user.id);

    successToast("Login realizado com sucesso!");
    navigate("/dashboard");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loading && <LoadingModal />}
      <h1>Login</h1>

      <label>
        E-mail
        <Input
          {...register("email", { required: "Campo email obrigatório." })}
          type="email"
          name="email"
          autoComplete="off"
          maxLength="30"
          placeholder="Digite seu e-mail"
        />
        <small>{errors.email?.message}</small>
      </label>

      <label>
        Senha
        <Input
          {...register("password", {
            required: "Campo senha obrigatório.",
          })}
          type="password"
          name="password"
          placeholder="Digite sua senha"
        />
        <small>{errors.password?.message}</small>
      </label>

      <ButtonLg theme={"color"} type="submit">
        Entrar
      </ButtonLg>

      <small>Ainda não possui uma conta?</small>

      <Redirect to={"/signup"}>Cadastrar-se</Redirect>
    </Form>
  );
}

export function SignupForm() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  async function onSubmit(data) {
    setLoading(true);
    const res = await userSignup({
      email: data.email,
      password: data.password,
      name: data.name,
      bio: data.bio,
      contact: data.contact,
      course_module: data.course_module,
    });
    setLoading(false);

    if (res.length) return warningToast("E-mail já esta em uso.");

    successToast("Cadastro concluído com sucesso!");
    navigate("/");
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {loading && <LoadingModal />}

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
    </Form>
  );
}
