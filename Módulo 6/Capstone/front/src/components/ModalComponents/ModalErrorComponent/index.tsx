import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalProps,
} from "@chakra-ui/react";
import React from "react";
import { TextB2, TextH7 } from "../../TextComponents";

interface IModalError extends ModalProps {
  textHeader: string
  textBody: string
  children: React.ReactNode
}

export const ModalError = ({ textHeader, textBody, isOpen, onClose, children }: IModalError) => {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          mt="100px"
          as="form"
          fontFamily="Lexend"
          zIndex="10000"
        >
          <ModalHeader>
            <TextH7>{textHeader}</TextH7>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody display="flex" flexDirection="column" gap="20px" p={5}>
            <TextB2>
              {textBody}
            </TextB2>
            {children}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
