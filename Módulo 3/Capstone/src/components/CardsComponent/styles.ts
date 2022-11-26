import styled from "styled-components";

interface iCardsStyledProps {
  isFlipped: boolean;
}

export const CardsStyled = styled.section<iCardsStyledProps>`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  background-color: var(--color-grey1);
  padding: 20px 20px;
  animation: appear 1s;

  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 320px) and (max-height: 560px) {
    transform: scale(0.82);
  }

  .close {
    border: 5px solid var(--color-primary-soft);
    height: 50px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    position: absolute;
    z-index: 1;
    bottom: 5%;
    background-color: var(--color-primary-soft);
    cursor: pointer;

    p {
      color: var(--color-grey1);
      font-size: 22px;
      font-weight: 600;
    }

    @media (min-width: 768px) and (min-height: 500px) {
      top: -30px;
    }

    @media (max-height: 500px) {
      bottom: 15%;
      right: 60px;
      max-width: 210px;
      width: 100%;
    }

    @media (max-width: 320px) and (max-height: 560px) {
      bottom: -5%;
    }
  }

  @media (min-width: 768px) {
    border: 5px solid var(--color-primary-soft);
    max-width: 850px;
    max-height: 650px;
    border-radius: 16px;

    @media (max-height: 500px) {
      border: none;
    }

    .ball {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--color-primary-soft);
      position: absolute;

      @media (max-height: 500px) {
        display: none;
      }
    }

    .ball1 {
      top: 20px;
      left: 20px;
    }

    .ball2 {
      top: 20px;
      right: 20px;
    }

    .ball3 {
      bottom: 20px;
      left: 20px;
    }

    .ball4 {
      bottom: 20px;
      right: 20px;
    }
  }

  .game {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 100%;
    position: relative;
    background-color: var(--color-grey1);
    height: 100%;
    border-radius: 12px;

    h3 {
      color: var(--color-grey3);

      @media (max-height: 500px) {
        position: absolute;
        right: 40px;
        top: 60px;
        width: 210px;
        display: flex;
        justify-content: center;
      }
    }

    .score {
      display: flex;
      gap: 40px;

      div {
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
          font-size: 1.8rem;
          font-weight: 800;
        }
      }

      .difficult {
        color: var(--color-danger);
      }

      .doubt {
        color: var(--color-warning);
      }

      .easy {
        color: var(--color-success);
      }

      @media (max-height: 500px) {
        padding-top: 90px;
        position: absolute;
        bottom: 180px;
        right: 35px;
        gap: 30px;
      }
    }

    .cardsList {
      width: 100%;
      height: 350px;
      display: flex;
      gap: 20px;
      overflow-x: hidden;
      padding: 16px;
      display: grid;
      grid-auto-flow: column;
      grid-auto-columns: 2fr;
      align-items: center;
      justify-content: center;

      @media (max-height: 500px) {
        padding-left: 30%;
        padding-right: 30%;
        height: 100%;
        width: 85%;
        justify-content: center;
        align-self: flex-start;
        transform: scale(0.8);
        max-width: 500px;
      }

      &::-webkit-scrollbar {
        height: 0;
      }

      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        align-self: center;
      }
    }

    .buttons {
      display: flex;
      gap: 20px;
      align-self: center;
      bottom: 70px;
      margin: 0 auto;
      padding-bottom: 20px;
      opacity: ${({ isFlipped }) => (isFlipped ? `1` : `0.5`)};

      @media (max-height: 500px) {
        right: 40px;
        position: absolute;
        justify-content: center;
        bottom: 100px;
        gap: 45px;
      }

      .button {
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 22px;
        font-weight: 600;
        color: white;
        border-radius: 12px;
      }

      .difficult {
        background-color: var(--color-danger);
      }

      .doubt {
        background-color: var(--color-warning);
      }

      .easy {
        background-color: var(--color-success);
      }
    }
  }
`;
