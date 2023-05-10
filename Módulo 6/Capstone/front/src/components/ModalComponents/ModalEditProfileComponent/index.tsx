import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  InputGroup,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";

import {
  ButtonBrand1,
  ButtonGray6,
  ButtonAlert3,
  ButtonGray10,
} from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { InputFormComponent } from "../../InputFormComponent/InputFormRegisterUserComponent";
import { Colors } from "../../../styles/colors";
import { UserContext } from "../../../contexts/userContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserSchema } from "../../../schemas/user.schema";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { inputCSS, labelCSS } from "../../../styles/global";

export const ModalEditProfile = ({ isOpen, onClose }: ModalProps) => {
  const { handleClick, userEditProfile, user } = useContext(UserContext);
  const [showPassword, setShowPassword] = useState(true);
  const [animation, setAnimation] = useState(false);
  const [optionIsBuyer, setOptionIsBuyer] = useState<boolean>(false);
  const [optionIsAdvertiser, setOptionIsAdvertiser] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(true);
  const [isFormValid, setIsFormValid] = useState(false);
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    cpf: "",
    phone: "",
    birthdate: "",
    description: "",
    avatar: "",
    password: "",
    accountType: "",
  });

  const {
    register,
    formState: { errors },
    watch,
  } = useForm({
    resolver: yupResolver(updateUserSchema),
  });

  const descriptionValue = watch("description");
  const handlerForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const updatedFields: {
      name?: string;
      email?: string;
      cpf?: string;
      phone?: string;
      birthdate?: string;
      description?: string;
      password?: string;
      accountType?: string;
      avatar?: string;
    } = {};

    if (user) {
      if (formValues.name !== "") {
        updatedFields.name = formValues.name;
      }

      if (formValues.email !== "") {
        updatedFields.email = formValues.email;
      }

      if (formValues.password !== "") {
        updatedFields.password = formValues.password;
      }

      if (formValues.birthdate !== "") {
        const brDate = formValues.birthdate.split("/");
        if (brDate.length === 3) {
          const usDate = `${brDate[2]}-${brDate[1]}-${brDate[0]}`;
          updatedFields.birthdate = usDate;
        }
      }

      if (formValues.cpf !== "") {
        updatedFields.cpf = formValues.cpf;
      }

      if (formValues.phone !== "") {
        updatedFields.phone = formValues.phone;
      }

      if (
        formValues.description !== "" &&
        formValues.description !== user.description
      ) {
        updatedFields.description = formValues.description;
      }
      if (formValues.avatar !== "" && formValues.avatar !== user.avatar) {
        updatedFields.avatar = formValues.avatar;
      }

      if (formValues.accountType !== "") {
        updatedFields.accountType = formValues.accountType;
      }

      const dataUpdate = {
        ...updatedFields,
        accountType: optionIsBuyer ? "buyer" : "seller",
      };

      try {
        userEditProfile(dataUpdate);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
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

  useEffect(() => {
    const allValuesAreEmpty = Object.values(formValues).every(
      (value) => value === ""
    );
    setIsFormValid(!allValuesAreEmpty);
  }, [formValues]);

  useEffect(() => {
    setIsFormValid(!!descriptionValue);
  }, [descriptionValue]);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          onSubmit={(event) => {
            event.preventDefault();
            handlerForm(event);
          }}
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7 fontWeight={800} color={Colors.brand1}>
              Editar perfil
            </TextH7>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2 fontWeight={500}>Informações do pessoais</TextB2>
            <Flex flexDir={"column"} gap={5}>
              <InputFormComponent
                labelText={"Nome"}
                register={register}
                value={formValues.name}
                onChange={(event) => {
                  setFormValues({ ...formValues, name: event.target.value });
                  handleInputChange(event);
                }}
                name="name"
                autoComplete="off"
              />
              <InputFormComponent
                labelText={"Email"}
                register={register}
                value={formValues.email}
                name="email"
                onChange={(event) => {
                  setFormValues({ ...formValues, email: event.target.value });
                  handleInputChange(event);
                }}
                autoComplete="off"
              />
              <FormLabel css={labelCSS} mb={0}>
                Senha
              </FormLabel>
              <Flex>
                <InputGroup>
                  <Input
                    borderRightRadius={0}
                    focusBorderColor={Colors.brand1}
                    color={Colors.brand1}
                    value={formValues.password}
                    type={showPassword ? "password" : "text"}
                    name="password"
                    onChange={(event) => {
                      setFormValues({
                        ...formValues,
                        password: event.target.value,
                      });
                      handleInputChange(event);
                    }}
                    autoComplete="off"
                  ></Input>
                  <IconButton
                    borderLeftRadius={0}
                    aria-label="Toggle password visibility"
                    borderRadius={"0 4px 4px 0"}
                    icon={showPassword ? <ViewOffIcon /> : <ViewIcon />}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                </InputGroup>
              </Flex>
            </Flex>
            <InputFormComponent
              labelText={"Avatar"}
              placeholder={"https://image.com"}
              register={register}
              name="avatar"
              value={formValues.avatar}
              onChange={(event) => {
                setFormValues({ ...formValues, avatar: event.target.value });
                handleInputChange(event);
              }}
              autoComplete="off"
            />
            <InputFormComponent
              mask={"999.999.999-99"}
              labelText={"CPF"}
              register={register}
              name="cpf"
              onChange={(event) => {
                setFormValues({ ...formValues, cpf: event.target.value });
                handleInputChange(event);
              }}
              value={formValues.cpf}
              autoComplete="off"
            />
            <InputFormComponent
              mask={"(99) 99999-9999"}
              labelText={"Celular"}
              register={register}
              name="phone"
              onChange={(event) => {
                setFormValues({ ...formValues, phone: event.target.value });
                handleInputChange(event);
              }}
              value={formValues.phone}
              autoComplete="off"
            />
            <FormControl isInvalid={isError}>
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
            <InputFormComponent
              mask={"99/99/9999"}
              labelText={"Data de Nascimento"}
              register={register}
              name="birthdate"
              onChange={(event) => {
                setFormValues({ ...formValues, birthdate: event.target.value });
                handleInputChange(event);
              }}
              value={formValues.birthdate}
              autoComplete="off"
            />
            <FormLabel m={0}>Descrição</FormLabel>
            <Textarea
              css={inputCSS}
              autoComplete="off"
              resize={"none"}
              color={Colors.brand1}
              focusBorderColor={Colors.brand1}
              value={formValues.description}
              {...register("description", {
                onChange: (e) => {
                  setFormValues({ ...formValues, description: e.target.value });
                  handleInputChange(e);
                },
              })}
            />
          </ModalBody>
          <ModalFooter gap="10px">
            <ButtonGray6 onClick={onClose}>Cancelar</ButtonGray6>
            <ButtonAlert3 onClick={() => handleClick("delete")}>
              Excluir Perfil
            </ButtonAlert3>
            <ButtonBrand1
              type="submit"
              isDisabled={!isFormValid}
              onClick={(event) => handlerForm(event)}
            >
              Salvar Alterações
            </ButtonBrand1>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
