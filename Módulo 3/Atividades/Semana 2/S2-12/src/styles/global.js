import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;

        /* Color */
        --color-primary: #27a660;
        --color-primary50: #93d7af;
        --color-secondary: #eb5757;
        --color-gray100: #333333;
        --color-gray50: #828282;
        --color-gray20: #e0e0e0;
        --color-gray0: #f5f5f5;
        --color-feedNegative: #e60000;
        --color-feedWarning: #ffcd07;
        --color-feedSucess: #168821;
        --color-feedInformation: #155bcb;

        /* Font-Size */
        --font-heading1: 2.6rem;
        --font-heading2: 2.2rem;
        --font-heading3: 1.8rem;
        --font-heading4: 1.4rem;
        --font-headline: 1.6rem;
        --font-body: 1.4rem;
        --font-body600: 1.4rem;
        --font-caption: 1.2rem;

        /* Font-Weight */
        --font-weight1: 700;
        --font-weight2: 600;
        --font-weight3: 400;
    }
    
    /* Reset CSS */
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html,
    body {
        height: 100%;
        font-family: 'Inter', sans-serif;
    }

    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }

    menu,
    ul,
    ol {
        list-style: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    input  {
        outline: transparent;
    }

    button {
        border-color: transparent;
        cursor: pointer;
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        overflow-wrap: break-word;
    }

`;
