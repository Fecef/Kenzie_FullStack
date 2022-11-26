import styled, { css } from "styled-components";

interface iContainerInputProps {
  clickable?: boolean;
}

export const ContainerInputStyled = styled.div<iContainerInputProps>`
  width: 100%;
  height: 5rem;
  position: relative;

  input {
    background-color: transparent;
    width: 100%;
    height: 5rem;
    border: 3px solid var(--color-grey4);
    border-radius: 8px;
    padding-left: 1rem;
    color: var(--color-text);
  }
  span {
    background-color: var(--color-grey4);
    color: var(--color-grey1);
    position: absolute;
    right: 0;
    top: 0;
    width: 5.7rem;
    height: 100%;
    text-align: center;
    font-size: 3.5rem;
    border-radius: 0 8px 8px 0;
    padding: 0.5rem;
    ${({ clickable }) =>
      clickable &&
      css`
        cursor: pointer;
      `}
  }
`;
