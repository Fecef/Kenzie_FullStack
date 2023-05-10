import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Flex, useColorMode } from "@chakra-ui/react";
import { Colors } from "../styles/colors";

export const ThemeIcon = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const bordColor = () => {
    return colorMode === "dark" ? Colors.grey2 : Colors.grey3;
  };

  return (
    <Flex
      p={3}
      border={`2px solid ${bordColor()}`}
      borderRadius={10}
      onClick={toggleColorMode}
      cursor={"pointer"}
    >
      {colorMode === "light" ? (
        <MoonIcon fontSize={20} color={Colors.grey4} />
      ) : (
        <SunIcon fontSize={20} color={Colors.grey4} />
      )}
    </Flex>
  );
};
