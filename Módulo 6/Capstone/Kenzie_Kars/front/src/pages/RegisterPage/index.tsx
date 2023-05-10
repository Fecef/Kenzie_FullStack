import {
  Divider,
  Flex,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import { InfoIcon, ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

import { HeaderComponent } from "./../../components/HeaderComponent/index";
import { InputFormComponent } from "../../components/InputFormComponent/InputFormRegisterUserComponent/index";
import { ButtonBrand1, ButtonGray10 } from "../../components/ButtomComponents";
import { FooterComponent } from "./../../components/FooterComponent/index";
import { TextH5 } from "./../../components/TextComponents";
import { TextH7 } from "./../../components/TextComponents/index";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import { registerUserSchema } from "../../schemas/register.schema";
import { ModalSucess } from "../../components/ModalComponents/ModalSucessComponent";
import { labelCSS } from "../../styles/global";
import axios from "axios";
import { ModalError } from "../../components/ModalComponents/ModalErrorComponent";

const formStyle = {
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  gap: 45,
};

export const RegisterPage = () => {
  const {
    userRegister,
    isSucessModalOpen,
    setIsSucessModalOpen,
    isErrorModalOpen,
    setIsErrorModalOpen,
    messageModal,
    setMessageModal,
    cepValue,
    setCepValue,
    cepInfo,
    setCepInfo,
    validateCep,
  } = useContext(UserContext);
  const [isError, setIsError] = useState<boolean>(true);
  const [showPassword, setShowPassword] = useState(true);
  const [optionIsBuyer, setOptionIsBuyer] = useState<boolean>(false);
  const [optionIsAdvertiser, setOptionIsAdvertiser] = useState<boolean>(false);
  const [animation, setAnimation] = useState(false);
  const [openTooltip, setOpenTooltip] = useState(false);
  const [openTooltip2, setOpenTooltip2] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerUserSchema),
  });

  useEffect(() => {
    (async () => {
      await validateCep();
    })();
  }, [cepValue]);

  const setBuyerOption = () => {
    setIsError(false);
    if (optionIsBuyer) {
      setOptionIsBuyer(false);
      setOptionIsAdvertiser(true);
      return false;
    }
    setOptionIsBuyer(true);
    setOptionIsAdvertiser(false);
    return true;
  };

  const setAdvertiserOption = () => {
    setIsError(false);
    if (optionIsAdvertiser) {
      setOptionIsAdvertiser(false);
      setOptionIsBuyer(true);
      return false;
    }
    setOptionIsAdvertiser(true);
    setOptionIsBuyer(false);
    return true;
  };

  const handleClick = () => {
    setTimeout(() => {
      if (!optionIsBuyer && !optionIsAdvertiser) setAnimation(true);
      if (errors.password) {
        setOpenTooltip(true);
      }
      if (errors.confirmPassword) {
        setOpenTooltip2(true);
      }
    }, 50);
    setAnimation(false);
  };

  const registerUserForm = async (data: any) => {
    if (!optionIsBuyer && !optionIsAdvertiser) return;
    const dataUpdate = {
      ...data,
      accountType: optionIsBuyer ? "buyer" : "seller",
    };
    userRegister(dataUpdate);
  };

  return (
    <>
      <HeaderComponent />
      <Flex
        w={"full"}
        minH={"100vh"}
        justifyContent={"center"}
        alignItems={"center"}
        p={"125px 40px 0px 40px"}
      >
        <Flex
          flexDir={"column"}
          gap={30}
          p={"32px"}
          backgroundColor={Colors.white}
          borderRadius={"4px"}
        >
          <TextH5 fontWeight={800} fontFamily={"Lexend"} color={Colors.brand1}>
            Cadastro
          </TextH5>
          <form
            onSubmit={handleSubmit(registerUserForm)}
            style={{ ...formStyle, flexDirection: "column" }}
          >
            <FormControl isRequired>
              <Flex flexDir={"column"} gap={5}>
                <TextH7 fontWeight={800}>Informações Pessoais</TextH7>
                <InputFormComponent
                  labelText={"Nome"}
                  name="name"
                  autoComplete="off"
                  register={register}
                />
                <InputFormComponent
                  labelText={"Email"}
                  register={register}
                  name="email"
                  autoComplete="off"
                />
                <InputFormComponent
                  mask={"999.999.999-99"}
                  labelText={"CPF"}
                  register={register}
                  name="cpf"
                  autoComplete="off"
                />
                <InputFormComponent
                  mask={"(99) 99999-9999"}
                  labelText={"Celular"}
                  register={register}
                  name="phone"
                  autoComplete="off"
                />
                <InputFormComponent
                  mask={"99/99/9999"}
                  labelText={"Data de Nascimento"}
                  register={register}
                  name="birthdate"
                  autoComplete="off"
                />
                <FormControl isRequired={false}>
                  <InputFormComponent
                    hasTextArea={true}
                    labelText={"Descrição"}
                    register={register}
                    name="description"
                    autoComplete="off"
                  />
                </FormControl>
              </Flex>

              <Divider
                border={`1px solid ${Colors.brand1}`}
                borderRadius={"2px"}
                opacity={"1"}
                my={"55px"}
              />

              <Flex flexDir={"column"} mt={"15px"} gap={5}>
                <TextH7 fontWeight={800}>Informações de Endereço</TextH7>
                <InputFormComponent
                  mask={"99999.999"}
                  labelText={"CEP"}
                  register={register}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (value.length === 9) {
                      setCepValue(value);
                    }
                  }}
                  name="address.zipCode"
                  autoComplete="off"
                />
                <Flex gap={3}>
                  <Flex flexDir={"column"} gap={2}>
                    <InputFormComponent
                      labelText={"Estado"}
                      register={register}
                      name="address.state"
                      value={cepInfo.uf}
                      autoComplete="off"
                      readOnly={true}
                    />
                  </Flex>
                  <Flex flexDir={"column"} gap={2}>
                    <InputFormComponent
                      labelText={"Cidade"}
                      register={register}
                      value={cepInfo.localidade}
                      name="address.city"
                      autoComplete="off"
                      readOnly={true}
                    />
                  </Flex>
                </Flex>
                <InputFormComponent
                  labelText={"Rua"}
                  register={register}
                  name="address.street"
                  autoComplete="off"
                />
                <Flex gap={3}>
                  <Flex flexDir={"column"} gap={2}>
                    <InputFormComponent
                      labelText={"Número"}
                      type="number"
                      register={register}
                      name="address.number"
                      autoComplete="off"
                    />
                  </Flex>
                  <FormControl isRequired={false}>
                    <Flex flexDir={"column"} gap={2}>
                      <InputFormComponent
                        labelText={"Complemento"}
                        register={register}
                        name="address.complement"
                        autoComplete="off"
                      />
                    </Flex>
                  </FormControl>
                </Flex>
                <Divider
                  border={`1px solid ${Colors.brand1}`}
                  borderRadius={"2px"}
                  opacity={"1"}
                />
              </Flex>

              <Flex flexDir={"column"} gap={5}>
                <FormControl isRequired isInvalid={isError}>
                  <FormLabel mt={"15px"}>Tipo de conta</FormLabel>
                  <Flex gap={3}>
                    <ButtonBrand1
                      w={"full"}
                      className={
                        animation
                          ? "animate__animated animate__flash animate__faster"
                          : ""
                      }
                      isDisabled={optionIsBuyer}
                      _hover={{ bg: Colors.brand1 }}
                      onClick={() => setBuyerOption()}
                    >
                      Comprador
                    </ButtonBrand1>

                    <ButtonGray10
                      w={"full"}
                      className={
                        animation
                          ? "animate__animated animate__flash animate__faster"
                          : ""
                      }
                      isDisabled={optionIsAdvertiser}
                      _hover={{ bg: "none" }}
                      onClick={() => setAdvertiserOption()}
                    >
                      Anunciante
                    </ButtonGray10>
                  </Flex>
                </FormControl>
                <Divider
                  border={`1px solid ${Colors.brand1}`}
                  borderRadius={"2px"}
                  opacity={"1"}
                />
                <FormControl isRequired>
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
                <Tooltip
                  hasArrow
                  bg={Colors.brand1}
                  color={Colors.white}
                  borderRadius={"4px"}
                  placement={"right"}
                  isOpen={openTooltip}
                  label={
                    "Minimo de 8 caracteres contendo ao menos uma letra, um número e um símbolo."
                  }
                >
                  <InfoIcon
                    position={"absolute"}
                    bottom={"155px"}
                    left={"60px"}
                    fontSize={"15px"}
                    color={Colors.brand1}
                    cursor={"pointer"}
                    onClick={() => setOpenTooltip(!openTooltip)}
                  />
                </Tooltip>
                <FormControl isRequired>
                  <FormLabel css={labelCSS} mt={"15px"}>
                    Confirmar Senha
                  </FormLabel>
                  <Flex>
                    <Input
                      focusBorderColor={Colors.brand1}
                      color={Colors.brand1}
                      type={showPassword ? "password" : "text"}
                      borderRadius={"4px 0 0 4px"}
                      {...register("confirmPassword")}
                    />

                    <IconButton
                      aria-label="Toggle password visibility"
                      borderRadius={"0 4px 4px 0"}
                      icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </Flex>
                </FormControl>
                <Tooltip
                  hasArrow
                  bg={Colors.brand1}
                  color={Colors.white}
                  borderRadius={"4px"}
                  placement={"right"}
                  isOpen={openTooltip2}
                  label={"As senhas devem ser idênticas."}
                >
                  <InfoIcon
                    position={"absolute"}
                    bottom={"55px"}
                    left={"127px"}
                    fontSize={"15px"}
                    color={Colors.brand1}
                    cursor={"pointer"}
                    onClick={() => setOpenTooltip2(!openTooltip2)}
                  />
                </Tooltip>
              </Flex>
            </FormControl>

            <ButtonBrand1 type="submit" onClick={() => handleClick()}>
              Finalizar Cadastro
            </ButtonBrand1>
          </form>
        </Flex>
      </Flex>
      <FooterComponent />
      <ModalSucess
        isOpen={isSucessModalOpen}
        onClose={() => setIsSucessModalOpen(false)}
        children={undefined}
      />
      <ModalError
        isOpen={isErrorModalOpen}
        onClose={() => setIsErrorModalOpen(false)}
        textHeader={messageModal.textHeader}
        textBody={messageModal.textBody}
        children={undefined}
      />
    </>
  );
};
