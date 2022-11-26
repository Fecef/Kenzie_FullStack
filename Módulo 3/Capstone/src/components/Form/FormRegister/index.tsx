import { HiOutlineMail } from "react-icons/hi";
import { BsKey } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { ButtonStyled } from "../../../styles/button";
import { ContainerFormStyled } from "../../../styles/ContainerForm";
import { ContainerInputStyled } from "../../../styles/ContainerInput";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { schemaRegister } from "../../../validations/schemaRegister";
import { useContext, useState } from "react";
import { UserContext } from "../../../contexts/UserContext";
import { LinkStyled } from "../../../styles/anchor";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

export interface iRegisterInput {
  name: string;
  email: string;
  password: string;
  confPassword: string;
}

export const Register = () => {
  const { onRegister } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterInput>({
    resolver: yupResolver(schemaRegister),
  });

  const [type, setType] = useState("password");
  const [typeConfirm, setTypeConfirm] = useState("password");

  return (
    <ContainerFormStyled>
      <h1>Cadastro</h1>

      <form onSubmit={handleSubmit(onRegister)}>
        <ContainerInputStyled>
          <input
            id="name"
            type="text"
            autoComplete="off"
            {...register("name")}
          />
          <span>
            <FaRegUserCircle />
          </span>
        </ContainerInputStyled>
        <label htmlFor="name">Nome</label>
        <p>{errors.name?.message}</p>

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
          </ContainerInputStyled>
          <label htmlFor="password">Senha</label>
        </div>

        <p>{errors.password?.message}</p>

        <div className="divInput">
          <ContainerInputStyled clickable>
            <input
              id="confPassword"
              type={typeConfirm}
              {...register("confPassword")}
            />
            {typeConfirm === "password" ? (
              <span>
                <AiOutlineEyeInvisible onClick={() => setTypeConfirm("text")} />
              </span>
            ) : (
              <span>
                <AiOutlineEye onClick={() => setTypeConfirm("password")} />
              </span>
            )}
          </ContainerInputStyled>
          <label htmlFor="confPassword">Confirmar senha</label>
        </div>
        <p>{errors.confPassword?.message}</p>

        <div className="buttons">
          <ButtonStyled type="submit">Cadastrar</ButtonStyled>
          <span>ou</span>
          <LinkStyled to="/">Login</LinkStyled>
        </div>
      </form>
      {/* <h1 className="logo"><b>	&lt;/&gt;</b> Kenzie Flash</h1> */}
    </ContainerFormStyled>
  );
};
