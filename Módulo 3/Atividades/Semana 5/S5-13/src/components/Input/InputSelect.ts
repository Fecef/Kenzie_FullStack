import styled from "styled-components";

export const InputSelect = styled.select`
  background-color: var(--color-grey2);
  border: 1px solid transparent;
  border-radius: 4px;
  color: var(--color-grey0);
  font-size: var(--font-title3);
  padding: 1rem 1.6rem;
  max-width: 100%;

  &::placeholder {
    color: var(--color-grey1);
  }

  &:focus {
    border: 1px solid var(--color-grey0);
  }
`;
