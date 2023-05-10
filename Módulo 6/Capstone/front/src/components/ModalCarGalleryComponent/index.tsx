import {
  Box,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import car from "../../assets/unsplash_ZVgPUWC9Mjs.png";
import { Colors } from "../../styles/colors";

interface IModalCarGallery {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalCarGalleryComponent = ({
  isOpen,
  onClose,
}: IModalCarGallery) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size={"3xl"}>
      <ModalOverlay />
      <ModalContent top={"50px"}>
        <ModalHeader>Imagem do veículo</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Box
            backgroundColor={Colors.grey7}
            borderRadius={"4px"}
            cursor={"pointer"}
          >
            <Image src={car} width={"100%"} objectFit={"contain"} />
          </Box>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};
