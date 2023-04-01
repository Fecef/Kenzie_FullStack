import styled from "styled-components";

export const Box = styled.header`
    background-color: #fff;
    
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    menu li {
        display: inline-block;
        margin-left: 2rem;
        
        a {
            color: var(--color-grey4);
            font-weight: bold;
            transition-duration: 0.2s;
    
            :hover {
                color: var(--color-primary);
            }
    }
    }
`