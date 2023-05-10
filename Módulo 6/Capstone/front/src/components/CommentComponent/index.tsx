import { Avatar, Flex, Textarea } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextB1, TextB2 } from "../TextComponents";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { UserContext } from "../../contexts/userContext";
import { useContext, useState } from "react";
import { ButtonBrand1, ButtonGray6 } from "../ButtomComponents";
import { FontSizes } from "../../styles/fontSizes";
import { api } from "../../services/api";
import { IComment } from "../../interfaces/comment.interface";

interface IUserCommentary {
  comment: IComment;
}

export const CommentComponent = ({ comment }: IUserCommentary) => {
  const { user } = useContext(UserContext);

  const [userComment, setUserComment] = useState<IComment | null>(comment);
  const [editInputValue, setEditInputValue] = useState(comment.comment);
  const [openEditBox, setOpenEditBox] = useState(false);

  const getTotalDays = (value: string) => {
    const date1 = new Date(value);
    const date2 = new Date();
    const diffInMs = date2.getTime() - date1.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (diffInMinutes * 60));
    const diffInDays = Math.floor(diffInMs / (diffInHours * 24));

    if (diffInMinutes === 0) return "Poucos segundos atrás";
    if (diffInMinutes < 59) return `${diffInMinutes} minutos atrás`;
    if (diffInHours === 1) return `${diffInHours} hora atrás`;
    if (diffInHours < 24) return `${diffInHours} horas atrás`;
    if (diffInDays === 1) return `${diffInDays} dia atrás`;

    return `${diffInDays} dias atrás`;
  };

  const handleDeleteComment = async () => {
    setUserComment(null);
    await api.delete(`/comments/${comment.id}`);
  };

  const handleEditComment = async (value: string) => {
    userComment!.comment = value;
    setUserComment(userComment);

    await api.patch(`/comments/${comment.id}`, { comment: value });

    setOpenEditBox(false);
  };

  return (
    userComment && (
      <Flex
        direction={"column"}
        gap={"20px"}
        borderRadius={"4px"}
        backgroundColor={Colors.white}
      >
        <Flex alignItems="center" justifyContent={"space-between"}>
          <Flex gap={"10px"} alignItems={"center"}>
            <Avatar w="32px" h="32px" src={userComment.user.avatar} />

            <TextB2 fontWeight="500">{userComment.user.name}</TextB2>
            <TextB2 fontWeight="500" color={Colors.grey3}>
              ●
            </TextB2>
            <TextB2 fontWeight="500" color={Colors.grey3}>
              {getTotalDays(userComment.updatedAt)}
            </TextB2>
          </Flex>

          {userComment.userId == user?.id && (
            <Flex gap={"10px"} fontSize={"18px"}>
              <EditIcon
                cursor={"pointer"}
                onClick={() => setOpenEditBox(!openEditBox)}
              />
              <DeleteIcon
                cursor={"pointer"}
                onClick={() => handleDeleteComment()}
              />
            </Flex>
          )}
        </Flex>

        {openEditBox ? (
          <>
            <Textarea
              fontWeight={FontSizes.body2}
              resize={"none"}
              rows={5}
              color={Colors.grey2}
              value={editInputValue}
              onChange={(e) => setEditInputValue(e.target.value)}
            />
            <Flex justifyContent={"flex-end"} gap={"10px"}>
              <ButtonGray6 onClick={() => setOpenEditBox(false)}>
                Cancelar
              </ButtonGray6>
              <ButtonBrand1 onClick={() => handleEditComment(editInputValue)}>
                Salvar
              </ButtonBrand1>
            </Flex>
          </>
        ) : (
          <TextB1 fontWeight="400" color={Colors.grey2}>
            {userComment.comment}
          </TextB1>
        )}
      </Flex>
    )
  );
};
