import styled from "styled-components";

export const ButtonLg = styled.button`
  font-size: var(--font-title3);
  width: 100%;
  padding: 0.7rem;
  ${({ theme }) =>
    theme == "color"
      ? `background-color: var(--color-primary);`
      : `background-color: var(--color-grey1);`}
  border-radius: 4px;
  color: var(--color-grey0);
  transition-duration: 0.2s;

  &:hover,
  &:focus {
    ${({ theme }) =>
      theme == "color"
        ? `background-color: var(--color-primary-focus);`
        : `background-color: var(--color-grey2);`}
  }

  &:disabled {
    background-color: var(--color-primary-negative);
  }
`;

export const ButtonSm = styled.button`
  color: var(--color-grey0);
  border-radius: 4px;
  ${({ theme }) =>
    theme == "grey"
      ? `background-color: var(--color-grey1);`
      : `background-color: var(--color-grey3);`}
  font-size: var(--font-headline);
  padding: 0.7rem;
  width: 30%;
  max-width: 10rem;
  transition-duration: 0.2s;

  &:hover,
  &:focus {
    background-color: var(--color-grey2);
  }
`;
