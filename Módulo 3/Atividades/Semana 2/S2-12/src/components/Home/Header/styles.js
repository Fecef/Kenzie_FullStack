import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--color-gray0);
  padding: 1rem;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 1300px;
  margin: 0 auto;

  @media (min-width: 551px) {
    justify-content: space-between;
  }

  @media (min-width: 1224px) {
    padding: 0 2rem;
  }
`;
