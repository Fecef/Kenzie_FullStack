import styled from "styled-components";

export const Section = styled.section`
  background-color: #fafafa;
  font-size: 1.8rem;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;

    label {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      color: #1e1e1e;
      font-size: 1.4rem;

      input {
        border: 1px solid transparent;
        border-radius: 4px;
        background-color: #d9d9d9;
        padding: 1rem;
      }
    }

    button {
      background-color: #e83838;
      border-radius: 4px;
      color: #fafafa;
      font-size: 1.5rem;
      font-weight: 700;
      padding: 1rem 0;
      width: 70%;
    }
  }
`;
