import { Form, P } from "./styles";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import axios from "axios";

export function FormUser() {
  const [message, setMessage] = useState();

  const formSchema = yup.object().shape({
    username: yup.string().required("Apelido obrigatório."),
    password: yup.string().required("Senha obrigatória."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    axios
      .post(" https://kenzieshop.herokuapp.com/sessions/", data)
      .then((res) => setMessage("Requisição Completa!"))
      .catch((err) => setMessage("Requisição Falhou!"));
  };

  return (
    <>
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <input
          type="text"
          placeholder="Usuário"
          maxLength="18"
          autoComplete="off"
          {...register("username")}
        />
        {errors.username?.message}
        <input
          type="text"
          placeholder="Senha"
          maxLength="18"
          autoComplete="off"
          {...register("password")}
        />
        {errors.password?.message}
        <button type="submit">CADASTRAR</button>
      </Form>

      <P>{message}</P>
    </>
  );
}
