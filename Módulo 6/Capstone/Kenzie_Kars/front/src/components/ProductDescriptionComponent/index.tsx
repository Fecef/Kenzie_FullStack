import { Flex, Spacer } from "@chakra-ui/react";

import { TextH6 } from "../TextComponents";
import { TextB1 } from "../TextComponents";
import { Colors } from "../../styles/colors";
import { IAnnouncement } from "../../interfaces/announcement.interface";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductDescriptionComponent = ({ announcement }: IProps) => {
  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH6 fontWeight="600">Descrição</TextH6>

      <Spacer />

      <TextB1 fontWeight="400" color={Colors.grey2}>
        {announcement.description}
      </TextB1>
    </Flex>
  );
};
