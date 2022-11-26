import { Link } from "react-router-dom";
import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 40rem;

    img {
      width: 12rem;
    }
  }
`;

export const Redirect = styled(Link)`
  color: var(--color-grey0);
  border-radius: 4px;
  background-color: var(--color-grey3);
  font-size: var(--font-headline);
  padding: 0.7rem;
  text-align: center;
  width: 30%;
  max-width: 10rem;
  transition-duration: 0.2s;

  &:hover,
  &:focus {
    background-color: var(--color-grey2);
  }
`;
