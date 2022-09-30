import styled from "styled-components";

export const Menu = styled.menu`
  display: flex;
  gap: 2rem;
  overflow-x: auto;

  @media (min-width: 1200px) {
    flex-wrap: wrap;
    justify-content: space-between;
    overflow-x: unset;
  }
`;
