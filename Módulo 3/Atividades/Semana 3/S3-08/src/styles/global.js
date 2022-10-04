import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;
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
        font-size: 1.6rem;
        height: 100%;
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

    a {
        text-decoration: none;
        color: unset;
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

    #root, #__next {
        isolation: isolate;
    }
`;
