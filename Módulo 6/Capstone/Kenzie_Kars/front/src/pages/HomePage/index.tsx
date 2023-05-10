import {
  Box,
  Flex,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Show,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

import { HeaderComponent } from "../../components/HeaderComponent";
import { BannerComponent } from "../../components/BannerComponent";
import { ListCardComponent } from "../../components/ListCardComponent";
import { ListFiltersComponent } from "../../components/ListFiltersComponent";
import { FooterComponent } from "../../components/FooterComponent";
import { ButtonBrand1 } from "../../components/ButtomComponents";
import { FontSizes } from "../../styles/fontSizes";
import { ModalEditAd } from "../../components/ModalComponents/ModalEditAdComponent";
import { ModalDeleteAd } from "../../components/ModalComponents/ModalDeleteAdComponent";
import { useContext } from "react";
import { AnnouncementContext } from "../../contexts/announcementContext";
import { ModalHomeFiltersComponent } from "../../components/ModalComponents/ModalHomeFiltersComponent";

export const HomePage = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    editAdModalOpen,
    setEditAdModalOpen,
    deleteAdModalOpen,
    setDeleteAdModalOpen,
  } = useContext(AnnouncementContext);

  return (
    <Flex flexDirection={"column"}>
      <HeaderComponent />
      <BannerComponent />
      <Flex
        w="full"
        m={"70px auto 0"}
        alignItems={isMobile ? "center" : "start"}
        justifyContent={"space-between"}
        flexDir={isMobile ? "column" : "row"}
        px={["10px", "50px"]}
        gap={50}
      >
        <Box minW={"400px"}>
          <Show above="768px">
            <ListFiltersComponent />
          </Show>
        </Box>

        <Flex
          w={"1325px"}
          maxW={"100%"}
          justifyContent={"center"}
          flexDir={"column"}
        >
          <ListCardComponent filterActive hideTag />
        </Flex>

        <Show below="768px">
          <Flex margin="90px" alignItems="center">
            <ButtonBrand1 width="279px" onClick={onOpen}>
              Filtros
            </ButtonBrand1>
          </Flex>

          <Flex>
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
          </Flex>
        </Show>
      </Flex>
      <FooterComponent />
      <ModalHomeFiltersComponent onClose={onClose} isOpen={isOpen} />
      <ModalEditAd
        isOpen={editAdModalOpen}
        onClose={() => setEditAdModalOpen(false)}
      />
      <ModalDeleteAd
        isOpen={deleteAdModalOpen}
        onClose={() => setDeleteAdModalOpen(false)}
      />
    </Flex>
  );
};
