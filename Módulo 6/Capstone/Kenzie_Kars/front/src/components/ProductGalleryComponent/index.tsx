import { Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextH6 } from "../TextComponents";
import { GalleryCarousel } from "../GalleryCarouselComponent";
import { IAnnouncement } from "../../interfaces/announcement.interface";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductGalleryComponent = ({ announcement }: IProps) => {
  const images = announcement.images?.map((el) => {
    return {
      original: el.imgUrl,
      thumbnail: el.imgUrl,
    };
  });

  return (
    <>
      <Flex
        direction={"column"}
        gap={"20px"}
        p={"28px 44px"}
        borderRadius={"4px"}
        backgroundColor={Colors.grey10}
      >
        <TextH6 fontWeight="600">Fotos</TextH6>

        <Flex gap={"20px"} wrap={"wrap"} justifyContent={"center"}>
          <GalleryCarousel items={images || []} />
        </Flex>
      </Flex>
    </>
  );
};
