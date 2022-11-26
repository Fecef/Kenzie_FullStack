import styled, { css } from "styled-components";

interface iStyledDashboardProps {
  onPractice: boolean;
}

export const DashboardStyled = styled.div<iStyledDashboardProps>`
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media (min-width: 1000px) {
    flex-direction: row;
  }

  .header {
    z-index: 3;
    position: fixed;
    width: 100%;
  }

  .deckContainer {
    background-color: var(--color-grey1);
    width: 100%;
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    z-index: 1;

    @media (max-width: 1000px) {
      ${({ onPractice }) =>
        onPractice &&
        css`
          display: none;
        `}
    }

    @media (min-width: 1000px) {
      border-right: 5px solid var(--color-primary);
      width: 700px;

      ul {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        overflow-y: auto;
        justify-content: center;

        &::-webkit-scrollbar {
          width: 0;
        }
      }
    }
  }

  .ContainerCards {
    display: flex;
    justify-content: center;
    align-self: center;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 100vh;
    z-index: 2;

    @media (min-width: 1000px) {
      height: 90vh;
      position: relative;
      padding: 20px;
      margin: 0 auto;
      top: 40px;
      align-items: center;
    }

    @media (max-height: 500px) {
      margin-top: 30px;
    }
  }

  .open {
    display: flex;
  }

  .closee {
    @media (max-width: 1000px) {
      display: none;
    }
  }
`;
