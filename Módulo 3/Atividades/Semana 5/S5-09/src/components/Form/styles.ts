import styled from "styled-components";

export const Container = styled.form`
  display: inline-flex;
  flex-direction: column;
  gap: 2rem;
  width: 25rem;

  label {
    display: flex;
    justify-content: space-between;
  }

  div {
    text-align: center;

    button {
      padding: 0 3.5rem;
      border-radius: 4px;
    }
  }
`;
