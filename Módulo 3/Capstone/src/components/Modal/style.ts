import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 10;

  div:first-child {
    background-color: #fff;
    width: 90%;
    margin: 0 auto;
    max-width: 37.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    position: relative;
    border-radius: 8px;
    border: 5px solid var(--color-primary);

    h1 {
      font-size: var(--font-size4);
      font-weight: 600;
      color: var(--color-primary);
      text-align: center;
      margin-bottom: 1.5rem;
      padding: 20px;
    }

    img {
      height: 60px;
      width: 60px;
      margin-top: 20px;
    }

    .containerRating {
      background-color: var(--color-primary);
      width: 100%;
      text-align: center;
      padding-bottom: 20px;

      h2 {
        font-size: var(--font-size4);
        margin: 2rem;
        margin-top: 3rem;
        color: #fff;
      }

      .MuiRating-icon {
        color: #faaf00;
      }
    }

    div {
      flex-direction: row;
      gap: 0.5rem;
      padding: 0;
    }
  }

  button {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background-color: transparent;
    font-weight: 700;
    cursor: pointer;
    color: #fff;
    background-color: var(--color-primary);
    border-radius: 50%;
    width: 25px;
    height: 25px;
    font-size: 1rem;

    &:hover {
      opacity: 0.8;
    }
  }
`;
