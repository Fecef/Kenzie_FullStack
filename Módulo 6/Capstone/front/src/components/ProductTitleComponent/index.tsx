import { Box, Flex, Spacer } from "@chakra-ui/react";

import { ButtonBrand1, ButtonBrand4 } from "../ButtomComponents";
import { TextH6, TextH7 } from "../TextComponents";
import { Colors } from "../../styles/colors";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/userContext";
import { Link, useParams } from "react-router-dom";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductTitleComponent = ({ announcement }: IProps) => {
  const { id } = useParams();
  const { user } = useContext(UserContext);

  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH6 fontWeight="600">{announcement.model}</TextH6>

      <Spacer />

      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        wrap={"wrap"}
        gap={"20px"}
      >
        <Flex gap={"10px"}>
          <ButtonBrand4 size="sm" cursor={"default"}>
            {announcement.year}
          </ButtonBrand4>
          <ButtonBrand4 size="sm" cursor={"default"}>
            {announcement.mileage.toLocaleString("pt-BR")} KM
          </ButtonBrand4>
        </Flex>

        <TextH7 fontWeight="500">
          {Number(announcement.price).toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </TextH7>
      </Flex>

      <Box>
        <Link
          to={`https://wa.me/${announcement.user?.phone.replace(/\D/g, "")}`}
        >
          {user?.id !== announcement.user?.id && <ButtonBrand1>Comprar</ButtonBrand1>}
        </Link>
      </Box>
    </Flex>
  );
};
