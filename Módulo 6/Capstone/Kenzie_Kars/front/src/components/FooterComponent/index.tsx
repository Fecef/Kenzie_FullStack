import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";

import { Colors } from "../../styles/colors";
import logo from "../../assets/logoWhite.svg";

export const FooterComponent = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Flex
      as="footer"
      flexDirection={isMobile ? "column" : "row"}
      justifyContent="space-between"
      gap="60px"
      alignItems="center"
      marginTop="45px"
      padding={isMobile ? "0" : "56px"}
      paddingTop="45px"
      paddingBottom="45px"
      bg={Colors.grey0}
      minH={"15vh"}
    >
      <Image src={logo} />

      <Text color={Colors.white} fontSize="14px" fontWeight="400">
        © 2023 - Todos os direitos reservados.
      </Text>

      <Button
        bg={Colors.grey1}
        color={Colors.white}
        onClick={handleScrollToTop}
      >
        <ChevronUpIcon />
      </Button>
    </Flex>
  );
};
