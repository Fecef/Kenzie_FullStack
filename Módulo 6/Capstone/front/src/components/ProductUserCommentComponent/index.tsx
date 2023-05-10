import { Link } from "react-router-dom";
import { Avatar, Box, Flex, Textarea, Wrap } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB2, TextH5 } from "../TextComponents";
import { CommentSugestionComponent } from "../CommentSuggestionComponent";
import { ButtonBrand1 } from "../ButtomComponents";
import { useContext, useState } from "react";
import { IAnnouncement } from "../../interfaces/announcement.interface";
import { UserContext } from "../../contexts/userContext";
import { api } from "../../services/api";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductUserCommentComponent = ({ announcement }: IProps) => {
  const { user } = useContext(UserContext);
  const [comment, setComment] = useState("");

  const handleClick = async (comment: string) => {
    await api.post(`/comments/announcement/${announcement.id}`, {
      comment: comment,
    });

    window.location.reload();
  };

  return (
    <Flex
      direction={"column"}
      gap={"20px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      {user?.id ? (
        <>
          <Flex gap={"10px"} alignItems="center">
            <Avatar w={"32px"} h={"32px"} src={user?.avatar} />
            <TextB2 fontWeight={"500"}>{user?.name}</TextB2>
          </Flex>

          <Flex direction={"column"} gap={"10px"} position={"relative"}>
            <Textarea
              placeholder="Carro muito confortável, foi uma ótima experiência de compra..."
              resize={"none"}
              height={"150px"}
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
            <Box
              position={{ sm: "absolute" }}
              right={"8px"}
              bottom={"8px"}
              zIndex={1}
            >
              <ButtonBrand1
                size="sm"
                width={"100%"}
                isDisabled={comment.trim().length ? false : true}
                onClick={() => handleClick(comment)}
              >
                Comentar
              </ButtonBrand1>
            </Box>
          </Flex>

          <Wrap
            onClick={(e) => {
              const { innerText, tagName } = e.target as HTMLElement;

              if (tagName === "LI") setComment(innerText);
            }}
          >
            <CommentSugestionComponent>Gostei muito!</CommentSugestionComponent>
            <CommentSugestionComponent>Incrível</CommentSugestionComponent>
            <CommentSugestionComponent>
              Recomendarei para meus amigos!
            </CommentSugestionComponent>
          </Wrap>
        </>
      ) : (
        <Flex alignItems={"center"} gap={"10px"}>
          <TextH5 fontWeight={"800"} fontFamily={"Lexend"}>
            Para comentar, é preciso estar
          </TextH5>
          <Link to={"/login"}>
            <Box
              backgroundColor={Colors.brand1}
              fontFamily={"Lexend"}
              fontWeight={"800"}
              fontSize={"20px"}
              borderRadius={"4px"}
              padding={"2px 5px"}
              color={Colors.white}
              className={
                "animate__animated animate__pulse animate__infinite animate__slow"
              }
            >
              Logado
            </Box>
          </Link>
        </Flex>
      )}
    </Flex>
  );
};
