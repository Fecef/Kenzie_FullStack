import {
  Box,
  Container,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
} from "@chakra-ui/react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

import { ButtonGray10OutlineG4 } from "./../../components/ButtomComponents/";
import { HeaderComponent } from "./../../components/HeaderComponent/";
import { FooterComponent } from "./../../components/FooterComponent/";
import { TextH5, TextH7 } from "./../../components/TextComponents/";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import { IUserLogin } from "../../interfaces/user.interface";
import { TextB2 } from "./../../components/TextComponents/";
import { labelCSS } from "../../styles/global";
import { ViewIcon, ViewOffIcon, WarningIcon } from "@chakra-ui/icons";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { userSession, sessionError } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IUserLogin>();
  const [showPassword, setShowPassword] = useState(true);
  const [animation, setAnimation] = useState(false);

  const formSubmit = async (data: IUserLogin) => userSession(data);

  function handleClick() {
    setTimeout(() => {
      setAnimation(true);
    }, 50);
    setAnimation(false);
  }

  return (
    <>
      <HeaderComponent />

      <Container maxW="1200px" pt={"130px"} minH={"85vh"}>
        <Flex
          as={"form"}
          direction={"column"}
          gap={"20px"}
          p={"32px"}
          maxW={"412px"}
          m={"0 auto"}
          borderRadius={"4px"}
          backgroundColor={Colors.white}
          onSubmit={handleSubmit(formSubmit)}
        >
          <TextH5 fontWeight={800} fontFamily={"Lexend"} color={Colors.brand1}>
            Login
          </TextH5>

          <FormControl isRequired>
            <FormLabel css={labelCSS}>Email</FormLabel>
            <Input
              focusBorderColor={Colors.brand1}
              color={Colors.brand1}
              autoComplete="off"
              {...register("email")}
            />

            <FormLabel css={labelCSS} mt={"15px"}>
              Senha
            </FormLabel>
            <Flex>
              <Input
                focusBorderColor={Colors.brand1}
                color={Colors.brand1}
                type={showPassword ? "password" : "text"}
                borderRadius={"4px 0 0 4px"}
                {...register("password")}
              />

              <IconButton
                aria-label="Toggle password visibility"
                borderRadius={"0 4px 4px 0"}
                icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                onClick={() => setShowPassword(!showPassword)}
              />
            </Flex>
          </FormControl>

          {sessionError && (
            <Flex
              justifyContent={"center"}
              gap={"10px"}
              alignItems={"center"}
              borderRadius={"4px"}
              border={`1px solid ${Colors.brand1}`}
              p={"20px 0"}
              className={
                animation ? "animate__animated animate__headShake" : ""
              }
            >
              <TextH7 color={Colors.brand1}>Email ou senha inválidos.</TextH7>
              <WarningIcon w={"30px"} h={"30px"} color="red" />
            </Flex>
          )}

          <Box textAlign={"end"}>
            <TextB2 color={Colors.grey2}>
              <Link to="/passwordRecovery"> Esqueci minha senha</Link>
            </TextB2>
          </Box>

          <ButtonBrand1
            h={"50px"}
            type={"submit"}
            onClick={() => handleClick()}
          >
            Entrar
          </ButtonBrand1>

          <Box textAlign={"center"}>
            <TextB2 color={Colors.grey2} alignSelf={"center"}>
              Ainda não possui conta?
            </TextB2>
          </Box>

          <ButtonGray10OutlineG4
            h={"50px"}
            onClick={() => navigate("/register")}
          >
            Cadastrar
          </ButtonGray10OutlineG4>
        </Flex>
      </Container>

      <FooterComponent />
    </>
  );
};
