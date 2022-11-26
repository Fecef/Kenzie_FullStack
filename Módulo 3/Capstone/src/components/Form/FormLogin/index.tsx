import logo from "../../../assets/logo.svg";
import { ContainerFormStyled } from "../../../styles/ContainerForm";
import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { ContainerInputStyled } from "../../../styles/ContainerInput";
import { ButtonStyled } from "../../../styles/button";
import { LinkStyled } from "../../../styles/anchor";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin } from "../../../validations/schemaLogin";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export interface iLoginInput {
  email: string;
  password: string;
}

export const Login = () => {
  const { onLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginInput>({ resolver: yupResolver(schemaLogin) });
  const [type, setType] = useState("password");
  return (
    <ContainerFormStyled>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onLogin)}>
        <div className="divInput">
          <ContainerInputStyled>
            <input
              id="email"
              type="text"
              autoComplete="off"
              {...register("email")}
            />
            <span>
              <HiOutlineMail />
            </span>
          </ContainerInputStyled>
          <label htmlFor="email">Email</label>
        </div>
        <p>{errors.email?.message}</p>

        <div className="divInput">
          <ContainerInputStyled clickable>
            <input id="password" type={type} {...register("password")} />
            {type === "password" ? (
              <span>
                <AiOutlineEyeInvisible onClick={() => setType("text")} />
              </span>
            ) : (
              <span>
                <AiOutlineEye onClick={() => setType("password")} />
              </span>
            )}
            {/* <span>
              <BsKey />
            </span> */}
          </ContainerInputStyled>
          <label htmlFor="password">Senha</label>
        </div>
        <p>{errors.password?.message}</p>

        <div className="buttons">
          <ButtonStyled type="submit">Entrar</ButtonStyled>
          <span>ou</span>
          <LinkStyled to="/register">Cadastrar</LinkStyled>
        </div>
      </form>
    </ContainerFormStyled>
  );
};
