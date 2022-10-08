import logo from "../../assets/Logo.svg";
import { Main } from "./styles";
import { ButtonLg } from "../../styles/button";
import { Input } from "../../styles/input";
import { login } from "../../services/api";
import { useState } from "react";
import { FormMain } from "../../styles/form";

// Hook Form
import { useForm } from "react-hook-form";
// Reuter Dom
import { Navigate } from "react-router-dom";
// Material UI
import { BasicModal } from "../../components/Modal/MUI";

export function Home({
  warningToast,
  successToast,
  loggedIn,
  setLoggedIn,
  setUser,
}) {
  const [notRegistered, setNotRegistered] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Enviando data para API.
  const onSubmit = async (data) => {
    setLoading(true);

    const res = await login({
      email: data.email,
      password: data.password,
    });

    setLoading(false);

    if (res.length) warningToast("Credênciais inválidas.");
    if (res.length) return console.log(res);

    // Guardando dados no LocalStorage.
    window.localStorage.clear();
    window.localStorage.setItem("@TOKEN", res.token);
    window.localStorage.setItem("@USERID", res.user.id);

    setUser(res.user);
    setLoggedIn(true);
    successToast("Login realizado com sucesso!");
  };

  // Redirecionamentos do usuário.
  if (loggedIn) return <Navigate to="/dashboard" />;
  if (notRegistered) return <Navigate to="/signup" />;

  return (
    <>
      {loading && <BasicModal />}

      <Main>
        <img src={logo} alt="Logo" />
        <FormMain onSubmit={handleSubmit(onSubmit)}>
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

          <ButtonLg
            onClick={() => setNotRegistered(true)}
            theme={"grey"}
            type="submit"
          >
            Cadastrar-se
          </ButtonLg>
        </FormMain>
      </Main>
    </>
  );
}
