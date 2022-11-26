import { Link } from "react-router-dom";
import styled from "styled-components";

interface theme {
  width?: string;
}

export const Redirect = styled(Link)`
  font-size: var(--font-title3);
  width: ${(props: theme) => props.width || "100%"};
  padding: 0.8rem;
  background-color: var(--color-grey1);
  border-radius: 4px;
  color: var(--color-grey0);
  text-align: center;
  transition-duration: 0.2s;

  &:hover,
  &:focus {
    background-color: var(--color-grey2);
  }

  &:disabled {
    background-color: var(--color-primary-negative);
  }
`;
