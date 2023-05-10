import { Box } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";

export const PurpleBackgroundComponent = () => {
  return (
    <Box
      position={"absolute"}
      zIndex={-1}
      w={"100%"}
      h={"300px"}
      backgroundColor={Colors.brand1}
    />
  );
};
