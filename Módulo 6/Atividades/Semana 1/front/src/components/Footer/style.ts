import styled from "styled-components";

export const Box = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #fff;

    address {
        display: flex;
        justify-content: center;
        gap: 2rem;
        padding: 1rem 0;
        font-weight: bold;
        
        a {
            font-style: normal;
            color: var(--color-grey4);
        }
    }
`