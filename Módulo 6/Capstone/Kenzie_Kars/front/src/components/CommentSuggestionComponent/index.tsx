import { WrapItem, WrapItemProps } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";

export const CommentSugestionComponent = ({ children }: WrapItemProps) => {
  return (
    <WrapItem
      backgroundColor={Colors.grey7}
      color={Colors.grey3}
      rounded={"24px"}
      p={"2px 15px"}
      fontSize={"0.75rem"}
      cursor={"pointer"}
    >
      {children}
    </WrapItem>
  );
};
