import { Flex } from "@chakra-ui/react";

import { Colors } from "../../styles/colors";
import { TextH6 } from "../TextComponents";
import { CommentComponent } from "../CommentComponent";
import { IAnnouncement } from "../../interfaces/announcement.interface";

interface IProps {
  announcement: IAnnouncement;
}

export const ProductCommentsComponent = ({ announcement }: IProps) => {
  return (
    <Flex
      direction={"column"}
      gap={"50px"}
      p={"28px 44px"}
      borderRadius={"4px"}
      backgroundColor={Colors.grey10}
    >
      <TextH6 fontWeight="600">Comentários</TextH6>

      {announcement.comments?.length
        ? announcement.comments.map((comment, i) => (
            <CommentComponent key={i} comment={comment} />
          ))
        : null}
    </Flex>
  );
};
