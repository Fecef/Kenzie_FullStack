import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import { TextB2, TextH7 } from "../../TextComponents";

export const ModalErrorSendEmailComponent = ({
  isOpen,
  onClose,
}: ModalProps) => {
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
              O endereço de e-mail inserido não corresponde a nenhum registro em
              nossa base de dados. Verifique se o endereço de e-mail foi
              digitado corretamente ou crie uma nova conta se ainda não tiver
              uma.
            </TextB2>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
