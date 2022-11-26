import styled from "styled-components";

interface iDarkMode {
  isDarkMode: boolean;
}

export const Container = styled.div<iDarkMode>`
  * {
    box-sizing: border-box;
  }
  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    transition: background 0.2s linear;
  }
  body.dark {
    background-color: #292c35;
  }
  .checkbox {
    opacity: 0;
    position: absolute;
  }

  .label {
    width: 50px;
    height: 26px;
    background-color: #222;
    display: flex;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;
    padding: 5px;
    position: relative;
    transform: scale(1.5);
    cursor: pointer;
  }

  .ball {
    width: 20px;
    height: 20px;
    background-color: white;
    position: absolute;
    top: 2px;
    left: 2px;
    border-radius: 50%;
    transition: transform 0.2s linear;
    transform: ${(props) =>
      props.isDarkMode ? "translateX(24px)" : "translateX(0px)"};
  }

  /*  target the elemenent after the label*/
  .checkbox:checked + .label .ball {
    transform: ${(props) =>
      props.isDarkMode ? "translateX(24px)" : "translateX(0px)"};
  }

  .fa-moon {
    color: pink;
  }

  .fa-sun {
    color: yellow;
  }

  @media (max-width: 320px) {
    scale: 0.7;
  }
`;
