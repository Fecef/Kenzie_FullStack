import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;

    section {
      border-radius: 8px;
      padding: 4rem;
      width: 40rem;
      max-height: 40rem;
      max-width: 100%;
      overflow-y: auto;
    }
  }
`;
