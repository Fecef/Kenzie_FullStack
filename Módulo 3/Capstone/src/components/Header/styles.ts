import styled from "styled-components";

export const AppHeader = styled.header`
  background-color: var(--color-primary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3rem;
  height: 6.5rem;

  h1 {
    color: var(--color-grey1);
    font-size: 2.5rem;

    b {
      color: #e12726;
    }
  }

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  button {
    scale: 0.8;
  }

  @media (max-width: 320px) {
    button {
      scale: 0.5;
    }
    .headerButtons {
      width: 50%;
      gap: 0;
    }
  }
`;
