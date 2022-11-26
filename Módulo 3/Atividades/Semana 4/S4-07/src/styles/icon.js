import styled from "styled-components";
import { BsTrash } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { TbMoodSad } from "react-icons/tb";

export const TrashIcon = styled(BsTrash)`
  cursor: pointer;
`;

export const CloseIcon = styled(MdClose)`
  cursor: pointer;
  color: var(--color-grey1);
  font-size: 2rem;
`;

export const SadIcon = styled(TbMoodSad)`
  cursor: pointer;
  font-size: 10rem;
`;
