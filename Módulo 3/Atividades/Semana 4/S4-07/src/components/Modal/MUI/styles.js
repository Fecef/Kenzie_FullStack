import styled from "styled-components";

export const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  &:focus {
    outline: transparent;
  }
`;

export const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--color-grey2);
  border-radius: 4px;
  overflow: auto;
  max-width: 90%;

  &:focus {
    outline: transparent;
  }

  h2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: var(--font-headline);
    padding: 1.5rem;
  }

  form.modalInputs {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: var(--color-grey3);
    padding: 1.5rem;

    label {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: var(--font-headline);
    }
  }

  div.modalFooter {
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    button {
      font-size: var(--font-title3);
    }
  }
`;
