import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 4rem 0;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-size: var(--font-title2);
    }

    button {
      color: var(--color-grey0);
      border-radius: 4px;
      background-color: var(--color-grey3);
      font-size: 2rem;
      padding: 0 0.7rem;
      transition-duration: 0.2s;

      &:hover,
      &:focus {
        background-color: var(--color-grey2);
      }
    }
  }

  menu {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    background-color: var(--color-grey3);
    border-radius: 4px;
    padding: 2rem 1rem;

    li {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: var(--color-grey4);
      border-radius: 4px;
      cursor: pointer;
      padding: 1rem;
      transition-duration: 0.2s;

      &:hover {
        background-color: var(--color-grey2);
      }

      > div {
        color: var(--color-grey1);
        font-size: var(--font-headline);
      }
    }
  }
`;

export const EmptyListMessage = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 5rem;
`;
