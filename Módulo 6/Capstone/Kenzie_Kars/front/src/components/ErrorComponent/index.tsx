import { Flex } from "@chakra-ui/react";

import { TextB1 } from "../TextComponents";

interface IError {
  text: any;
}

export const ErrorComponent = ({ text }: IError) => {
  return (
    <Flex justifyContent={"flex-start"} alignItems={"center"} py={2}>
      <TextB1 fontWeight={500}>* {text}</TextB1>
    </Flex>
  );
};
