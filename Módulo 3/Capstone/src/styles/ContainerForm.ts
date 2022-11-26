import styled from "styled-components";

export const ContainerFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90vh;
  background-color: var(--color-grey1);
  gap: 50px;
  animation: appear 1s;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-height: 500px) {
    top: 200px;
    margin: 4rem 0;
    height: unset;
  }

  h1 {
    font-weight: 800;
    font-size: var(--font-size1);
    color: var(--color-grey4);
    // position: sticky;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 35rem;
    position: sticky;
    top: 150px;
    gap: 10px;

    .divInput {
      position: relative;
    }

    input {
      padding: 20px;
      font-size: 1.5rem;
      border: 3px solid var(--color-grey4);
      border-radius: 8px;
      outline: none;
    }

    label {
      font-size: var(--font-size3);
      font-weight: 800;
      margin-top: 2rem;
      color: var(--color-grey4);
      position: absolute;
      background-color: var(--color-grey1);
      padding: 0px 10px;
      left: 16px;
      top: -3rem;
    }

    p {
      font-size: 1.2rem;
      color: red;
    }

    .buttons:last-child {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin: 2rem 0;
      align-items: center;

      button,
      a {
        width: 40%;
        display: flex;
        justify-content: center;
      }

      span {
        font-weight: 800;
        font-size: var(--font-size3);
        color: var(--color-grey3);
      }
    }
  }
`;
