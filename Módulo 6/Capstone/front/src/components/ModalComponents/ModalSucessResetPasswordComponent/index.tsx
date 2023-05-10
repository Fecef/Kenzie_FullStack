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
import { useContext } from "react";
import { ButtonBrand1 } from "../../ButtomComponents";
import { TextB2, TextH7 } from "../../TextComponents";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";

export const ModalSucessResetPasswordComponent = ({
  isOpen,
  onClose,
}: ModalProps) => {
  const { setIsSucessResetPasswordModalOpen } = useContext(UserContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent mt="100px" as="form" fontFamily="Lexend" zIndex="10000">
          <ModalHeader>
            <TextH7>Sucesso!</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2>Senha atualizada com sucesso!</TextB2>
          </ModalBody>
          <ModalFooter gap="10px">
            <Link
              to="/login"
              onClick={() => setIsSucessResetPasswordModalOpen(false)}
            >
              <ButtonBrand1>Ir para o login</ButtonBrand1>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
