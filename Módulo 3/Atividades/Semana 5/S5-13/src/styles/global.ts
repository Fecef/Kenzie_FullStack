import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;

        /* Colors */
        --color-primary: #ff577f;
        --color-primary-focus: #ff427f;
        --color-primary-negative: #59323f;
        
        --color-grey0: #f8f9fa;
        --color-grey1: #868e96;
        --color-grey2: #343b41;
        --color-grey3: #212529;
        --color-grey4: #121214;

        /* Fonts */
        --font-title1: 1.8rem;
        --font-title2: 1.6rem;
        --font-title3: 1.6rem;
        --font-headline: 1.4rem;
        --font-headlineBold: 1.4rem;
        --font-headlineItalic: 1.4rem;

        /* Toastfy */
        --toastify-text-color-light: #f8f9fa;
        --toastify-font-family: 'Inter', sans-serif;
        --toastify-color-dark: #343b41;
        --toastify-color-success: #3fe864;
        --toastify-color-error: #e83f5b;
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
    }

    body {      
        font-family: 'Inter', sans-serif;
        color: var(--color-grey0);
        background-color: var(--color-grey4);
        
        font-size: 1.6rem;
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
