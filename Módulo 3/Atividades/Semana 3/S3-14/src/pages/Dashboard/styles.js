import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;
export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  padding: 4rem 0;

  h1 {
    font-size: var(--font-title1);
  }

  p {
    font-size: var(--font-headline);
    color: var(--color-grey1);
  }
`;
export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 4rem 0;

  h2 {
    font-size: var(--font-title2);
  }

  p {
    font-size: var(--font-headline);
  }
`;
