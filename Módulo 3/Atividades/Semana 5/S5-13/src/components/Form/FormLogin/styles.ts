import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: var(--color-grey3);
  border-radius: 4px;
  padding: 3rem 1.5rem;
  width: 40rem;
  max-width: 90%;

  h1 {
    font-size: var(--font-title1);
  }

  label {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    font-size: var(--font-headline);
    width: 100%;

    small {
      font-size: 1.2rem;
      color: var(--color-grey1);
    }
  }

  > small {
    font-size: 1.2rem;
    color: var(--color-grey1);
    margin: 0.5rem 0;
  }
`;
