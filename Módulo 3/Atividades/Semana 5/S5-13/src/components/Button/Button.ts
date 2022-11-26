import styled from "styled-components";

interface theme {
  colored?: boolean;
  backgroundColor?: string;
  width?: string;
}

export const Button = styled.button`
  font-size: var(--font-title3);
  width: ${(props: theme) => props.width || "100%"};
  padding: 0.7rem;
  ${(props: theme) =>
    props.colored
      ? "background-color: var(--color-grey1);"
      : "background-color: var(--color-primary);"}
  border-radius: 4px;
  color: var(--color-grey0);
  transition-duration: 0.2s;

  &:hover {
    ${(props: theme) =>
      props.colored
        ? "background-color: var(--color-grey2);"
        : "background-color: var(--color-primary-focus);"}
  }

  &:disabled {
    background-color: var(--color-primary-negative);
  }
`;
