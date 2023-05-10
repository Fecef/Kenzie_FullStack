import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { TextB2, TextH7 } from "../../TextComponents";
import { Link } from "react-router-dom";
import { ButtonBrand1 } from "../../ButtomComponents";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";

export const ModalErrorResetPasswordComponent = ({
  isOpen,
  onClose,
}: ModalProps) => {
  const { setIsErrorResetPasswordModalOpen } = useContext(UserContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt="100px" as="form" fontFamily="Lexend" zIndex="10000">
          <ModalHeader>
            <TextH7>Erro!</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="20px" p={5}>
            <TextB2>
              O link de recuperação de senha que você recebeu expirou. Por
              favor, solicite uma nova redefinição de senha e verifique seu
              e-mail novamente.
            </TextB2>
          </ModalBody>
          <ModalFooter gap="10px">
            <Link
              to="/passwordRecovery"
              onClick={() => setIsErrorResetPasswordModalOpen(false)}
            >
              <ButtonBrand1>
                Solicitar novo link de recuperação de senha
              </ButtonBrand1>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
