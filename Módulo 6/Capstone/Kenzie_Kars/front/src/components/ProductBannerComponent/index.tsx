import { Flex, Image } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import fallbackImg from "../../assets/selected_car.jpg";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductBannerComponent = ({ announcement }: IProps) => {
  return (
    <Flex
      h={"350px"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      backgroundColor={Colors.grey10}
      borderRadius={"4px"}
    >
      <Image
        src={announcement.banner}
        w={"inherit"}
        h={"inherit"}
        objectFit={"cover"}
        fallbackSrc={fallbackImg}
      />
    </Flex>
  );
};
