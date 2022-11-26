import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  padding: 5rem 0;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 40rem;

    img {
      width: 16rem;
    }
  }
`;
