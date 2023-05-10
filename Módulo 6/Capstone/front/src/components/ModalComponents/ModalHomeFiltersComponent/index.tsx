import {
    Flex,
    Modal,
    ModalCloseButton,
    ModalContent,
    ModalHeader,
    ModalOverlay,
    UseModalProps,
} from "@chakra-ui/react";
import { FontSizes } from "../../../styles/fontSizes";
import { ListFiltersComponent } from "../../ListFiltersComponent";
import { ButtonBrand1 } from "../../ButtomComponents";

export const ModalHomeFiltersComponent = ({
    onClose,
    isOpen,
}: UseModalProps) => {
    return (
        <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent
                display="flex"
                alignItems="center"
                marginTop="80px"
                borderRadius="0"
            >
                <ModalHeader
                    fontSize={FontSizes.heading7}
                    fontFamily={"Lexend"}
                    fontWeight="500"
                    alignSelf="start"
                    p={"15px"}
                >
                    Filtro
                </ModalHeader>
                <ModalCloseButton />

                <ListFiltersComponent />

                <Flex marginTop="42px" marginBottom="32px">
                    <ButtonBrand1 width="279px" onClick={onClose}>
                        Ver anúncios
                    </ButtonBrand1>
                </Flex>
            </ModalContent>
        </Modal>
    );
};
