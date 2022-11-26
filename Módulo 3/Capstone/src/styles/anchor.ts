import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
  background-color: var(--color-grey1);
  color: var(--color-grey4);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.40);
  border-radius: 8px;
  border: 2px solid var(--color-grey4);
  font-weight: 800;
  font-size: var(--font-size2);
  padding: 0.5rem 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
