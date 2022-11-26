import styled from "styled-components";
import { BsFillTrashFill } from "react-icons/bs";

export const Section = styled.section`
  background-color: #1e1e1e;
  color: #fafafa;

  hr {
    color: #fafafa;
    margin: 2rem 0;
  }

  ul {
    list-style: disc;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow-y: auto;

    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;

export const TrashIcon = styled(BsFillTrashFill)`
  cursor: pointer;
`;
