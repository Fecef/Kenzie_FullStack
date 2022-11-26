import styled from "styled-components";
import { MdAddReaction } from "react-icons/md";

export const Section = styled.section`
  background-color: #e83838;
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

export const AddIcon = styled(MdAddReaction)`
  cursor: pointer;
`;
