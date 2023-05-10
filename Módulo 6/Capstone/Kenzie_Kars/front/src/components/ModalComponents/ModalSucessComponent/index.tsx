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
import { useForm } from "react-hook-form";
import { useState, useContext, useEffect } from "react";
import {
  ButtonBrand1,
} from "../../ButtomComponents";
import { TextB1, TextB2, TextH7 } from "../../TextComponents";
import { Link } from "react-router-dom";
import { UserContext } from "../../../contexts/userContext";

export const ModalSucess = ({ isOpen, onClose }: ModalProps) => {
  const {
    setIsSucessModalOpen
  } = useContext(UserContext);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7>Sucesso!</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="20px">
            <TextB2>
              Sua conta foi criada com sucesso!
            </TextB2>
            <TextB1>
              Agora você poderá ver seus negócios crescendo em grande escala
            </TextB1>
          </ModalBody>
          <ModalFooter gap="10px">
            <Link to='/login'>
              <ButtonBrand1 onClick={() => setIsSucessModalOpen(false)}>Ir para o login</ButtonBrand1>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
