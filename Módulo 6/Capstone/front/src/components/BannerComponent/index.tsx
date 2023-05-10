import { Box, Flex, Heading, Image, useMediaQuery } from "@chakra-ui/react";

import bannerWeb from "../../assets/banner.jpg";
import { Colors } from "../../styles/colors";
import { FontSizes } from "../../styles/fontSizes";

export const BannerComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box position="relative" marginTop="80px">
      <Image src={bannerWeb} w="100%" h={"544px"} objectFit={"cover"} />

      <Box
        position="absolute"
        top="0"
        left="0"
        w="100%"
        h="100%"
        bgGradient=" linear(to-t, #000000ed, #00000038) "
        opacity="1"
        zIndex="1"
      >
        <Flex
          color={Colors.white}
          zIndex="5"
          alignItems="center"
          flexDirection="column"
          justifyContent={isMobile ? "flex-start" : "center"}
          w="100%"
          h="100%"
          marginTop={isMobile ? "100px" : "0"}
        >
          <Heading
            as="h1"
            alignSelf="center"
            fontSize={isMobile ? FontSizes.heading3 : FontSizes.heading2}
            fontWeight={isMobile ? "500" : "600"}
          >
            Motors Shop
          </Heading>

          <Heading
            as="h2"
            textAlign="center"
            fontSize={isMobile ? FontSizes.heading4 : FontSizes.heading3}
            fontWeight={isMobile ? "500" : "600"}
            marginTop="20px"
          >
            A melhor plataforma de anúncios de carros do país
          </Heading>
        </Flex>
      </Box>
    </Box>
  );
};
