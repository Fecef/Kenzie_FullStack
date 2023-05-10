import ImageGallery from "react-image-gallery";
import { ReactImageGalleryProps } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { Box } from "@chakra-ui/react";

export const GalleryCarousel = ({ items }: ReactImageGalleryProps) => {
  return (
    <>
      <Box overflowX={"auto"}>
        <ImageGallery
          items={items}
          showPlayButton={false}
          showNav={false}
          showBullets
        />
      </Box>
    </>
  );
};
