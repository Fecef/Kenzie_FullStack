import { Avatar, Flex } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";

import { Colors } from "../../styles/colors";
import { TextB1, TextH6 } from "../TextComponents";
import { ButtonGray0 } from "../ButtomComponents";
import { IAnnouncement } from "../../interfaces/announcement.interface";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductAnnouncerInfoComponent = ({ announcement }: IProps) => {
  const navigate = useNavigate();

  return (
    <Flex
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <Avatar size={"xl"} src={announcement.user?.avatar} />

      <TextH6 fontWeight="600">{announcement.user?.name}</TextH6>
      <TextB1 fontWeight="400" color={Colors.grey2}>
        {announcement.user?.description}
      </TextB1>

      <ButtonGray0
        onClick={() => navigate(`/profile/${announcement.user?.id}`)}
      >
        Ver todos anúncios
      </ButtonGray0>
    </Flex>
  );
};
