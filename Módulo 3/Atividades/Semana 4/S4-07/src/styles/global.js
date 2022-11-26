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
        
        --color-feed-success: #3fe864;
        --color-feed-negative: #e83fab;

        /* Fonts */
        --font-title1: 1.6rem;
        --font-title2: 1.6rem;
        --font-title3: 1.6rem;
        --font-headline: 1.2rem;
        --font-headlineBold: 1.2rem;
        --font-headlineItalic: 1.2rem;
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

    hr {
        border: 1px solid var(--color-grey3);
    }

    #root, #__next {
        isolation: isolate;
    }

    /*  General */
    .container {
        width: 90%;
        max-width: 900px;
        margin: 0 auto;
    } 
`;
