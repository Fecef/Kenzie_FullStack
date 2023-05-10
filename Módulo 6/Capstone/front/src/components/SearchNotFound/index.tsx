import { Flex, Text, Image } from "@chakra-ui/react";
import PersonIcon from "../../../src/assets/person-icon.jpg";

export const SearchNotFound = () => {
  return (
    <Flex
      w={"100%"}
      flexDir={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      gap={3}
    >
      <Text
        fontSize={["2rem", "2.4rem"]}
        fontWeight={600}
        textAlign={"center"}
      >
        Nenhum resultado encontrado
      </Text>
      <Image h={"400px"} src={PersonIcon} />
    </Flex>
  );
};
