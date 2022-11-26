import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 10px;

        --color-primary: #33293F;
        --color-primary-soft: #5c5465;
        --color-grey1: #fff;
        --color-grey2: #A7A7A7;
        --color-grey3: #737373;
        --color-grey4: #222222;
        --color-success: #6DC366;
        --color-warning: #C3AE66;
        --color-danger: #C36666;
        --color-title: #33293F;
        --color-text:#222222;

        --font-size1: 4rem;
        --font-size2: 2.2rem;
        --font-size3: 1.6rem;
        --font-size4: 1.4rem;
        --font-size5: 1.2rem;
    }
    :root .darkMode{
        --color-primary: #33293F;
        --color-primary-soft: #fff;
        --color-grey1: #222222;
        --color-grey2: #737373;
        --color-grey3: #A7A7A7;
        --color-grey4: #DADADA;
        --color-success: #6DC366;
        --color-warning: #C3AE66;
        --color-danger: #C36666;
        --color-title: #737373;
        --color-text:#DADADA;
    }
    
    /* Reset CSS */
    *,
    *::after,
    *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    html,
    body {
        height: 100%;
    }

    body {      
        font-family: "Inter", sans-serif;
        background-color: var(--color-grey1);

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
    .hideModal{
        display: none;
    }
`;
