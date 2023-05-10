import {
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { HeaderComponent } from "../../components/HeaderComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { Colors } from "../../styles/colors";
import { UserContext } from "../../contexts/userContext";
import {
  IEmailSubmission,
  IResetPassword,
  IUserLogin,
} from "../../interfaces/user.interface";
import { labelCSS } from "../../styles/global";
import { ModalSucessSendEmailComponent } from "../../components/ModalComponents/ModalSucessSendEmailComponent";
import { ModalErrorSendEmailComponent } from "../../components/ModalComponents/ModalErrorSendEmailComponent";
import { TextH4, TextH6, TextH7 } from "../../components/TextComponents";

export const EmailSubmissionPage = () => {
  const {
    emailSend,
    isSucessResetPasswordModalOpen,
    setIsSucessResetPasswordModalOpen,
    isErrorResetPasswordModalOpen,
    setIsErrorResetPasswordModalOpen,
  } = useContext(UserContext);
  const { register, handleSubmit } = useForm<IEmailSubmission>();

  const formSubmit = async (data: IEmailSubmission) => emailSend(data);

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
          <TextH7
            fontSize={"18px"}
            fontWeight={800}
            fontFamily={"Lexend"}
            color={Colors.brand1}
          >
            Insira seu email e enviaremos um link para alterar sua senha.
          </TextH7>

          <FormControl isRequired>
            <FormLabel css={labelCSS}>Email</FormLabel>

            <Input
              focusBorderColor={Colors.brand1}
              color={Colors.brand1}
              type="text"
              borderRadius={"4px 0 0 4px"}
              autoComplete="off"
              {...register("email")}
            />
          </FormControl>

          <ButtonBrand1 h={"50px"} type={"submit"}>
            Enviar
          </ButtonBrand1>
        </Flex>
      </Container>

      <FooterComponent />
      <ModalSucessSendEmailComponent
        isOpen={isSucessResetPasswordModalOpen}
        onClose={() => setIsSucessResetPasswordModalOpen(false)}
        children={undefined}
      />
      <ModalErrorSendEmailComponent
        isOpen={isErrorResetPasswordModalOpen}
        onClose={() => setIsErrorResetPasswordModalOpen(false)}
        children={undefined}
      />
    </>
  );
};
