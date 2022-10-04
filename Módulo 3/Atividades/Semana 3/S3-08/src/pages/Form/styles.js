import styled from "styled-components";

export const Form = styled.form`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 30%;
  left: 50%;
  display: inline-flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    background-color: #a3e5f1;
    border-radius: 4px;
    padding: 0.5rem;
  }
`;

export const Section = styled.section`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 65%;
  left: 50%;
  border: 1px solid #000;
  border-radius: 4px;
  display: inline-block;
  padding: 1.5rem;
`;
