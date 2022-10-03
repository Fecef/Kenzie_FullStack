import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    display: flex;
    gap: 2rem;
    margin-top: 1rem;
    
    menu {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
