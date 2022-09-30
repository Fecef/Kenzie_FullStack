import styled from "styled-components";

export const Form = styled.form`
  position: relative;
  max-width: 100%;
`;

export const Input = styled.input`
  border: 2px solid var(--color-gray20);
  border-radius: 8px;
  color: var(--color-gray100);
  font-size: var(--font-headline);
  padding: 1rem 11rem 1rem 1rem;
  outline: var(--color-gray100);
  width: 100%;

  ::placeholder {
    font-size: var(--font-headline);
    color: var(--color-gray50);
  }

  :focus {
    border: 2px solid var(--color-gray100);
  }
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-gray0);
  font-size: var(--font-body600);
  font-weight: var(--font-weight3);
  padding: 0.5rem 1rem;
  position: absolute;
  right: 0.7rem;
  top: 0.7rem;

  :hover {
    background-color: var(--color-primary50);
  }
`;
