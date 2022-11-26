import styled from "styled-components";

export const DeckStyled = styled.div`
  height: 260px;
  width: 200px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: #5c5465;
  box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.35);
  margin-bottom: 100px;
  cursor: pointer;
  transition: 0.5s;
  &:hover {
    transform: scale(75%);
  }

  @media (min-width: 768px) {
    transform: scale(0.7);
    margin-bottom: 0;
  }

  .stars {
    position: absolute;
    top: -40px;
    display: flex;
    gap: 10px;
  }

  .cards {
    position: relative;
    height: 140px;
    width: 100px;

    .card {
      height: 140px;
      width: 100px;
      position: absolute;
      border-radius: 8px;
      background-color: #dadada;
      top: -25px;
      box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.35);

      figure {
        height: 60%;
        width: 100%;
        border-radius: 6px 6px 0px 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-success);
      }
    }

    .cardFront {
      transform: translate(-15px, -15px);

      figure {
        background-color: var(--color-warning);

        img {
          height: 70px;
          width: 70px;
          color: #dadada;
        }
      }
    }

    .cardEnd {
      transform: translate(15px, 15px);

      figure {
        background-color: var(--color-danger);
      }
    }
  }

  .cardName {
    height: 75px;
    width: 80%;
    border-radius: 12px;
    bottom: -25px;
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.35);
    padding: 0px 10px;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: white;
    color: var(--color-primary);
    box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.35);
  }
`;
