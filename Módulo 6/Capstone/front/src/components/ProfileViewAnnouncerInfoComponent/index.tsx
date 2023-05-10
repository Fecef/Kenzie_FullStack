import { Avatar, Flex, useDisclosure } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

import { TextB1, TextH6 } from "../TextComponents";
import { ButtonBrand1OutlineBrand1, ButtonBrand4 } from "../ButtomComponents";
import { Colors } from "../../styles/colors";
import { ModalRegisterAnnoucement } from "../ModalComponents/ModalRegisterAnnouncementComponent";

export const ProfileViewAnnouncerInfoComponent = ({ userProfile }: any) => {
  const { id } = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const userId = localStorage.getItem("@kenzieId");

  return (
    <>
      <Flex
        direction={"column"}
        gap={"20px"}
        p={"28px 44px"}
        w={{ sm: "100%", lg: "80%" }}
        m={"0 auto"}
        borderRadius={"4px"}
        backgroundColor={Colors.grey10}
      >
        <Avatar size={"xl"} />
        <Flex gap={"10px"} alignItems={"center"}>
          <TextH6 fontWeight={"600"}>{userProfile?.name}</TextH6>
          <ButtonBrand4 size={"sm"} cursor={"default"}>
            Anunciante
          </ButtonBrand4>
        </Flex>

        <TextB1 fontWeight={"400"} color={Colors.grey2}>
          {userProfile?.description}
        </TextB1>

        <ButtonBrand1OutlineBrand1
          alignSelf={"flex-start"}
          onClick={onOpen}
          hidden={id !== userId}
        >
          Criar anúncio
        </ButtonBrand1OutlineBrand1>
      </Flex>

      <ModalRegisterAnnoucement isOpen={isOpen} onClose={onClose} />
    </>
  );
};
