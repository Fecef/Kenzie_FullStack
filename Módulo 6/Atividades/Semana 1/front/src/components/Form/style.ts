import styled from "styled-components";

export const Box = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    max-width: 40rem;
    margin: 5rem auto 10rem;
    padding: 5rem;
    border-radius: 5px;
    background-color: var(--color-grey0);
    color: var(--color-grey4);

    label {
        display: flex;
        flex-direction: column;
        width: 100%;

        input {
            border: none;
            border-radius: 5px;
            background-color: #e1e7f2;
            color: var(--color-primary);
            font-size: 1.5rem;
            padding: 5px;
        }
    }

    button {
        color: var(--color-grey4);
        border: 1px solid var(--color-grey4);
        border-radius: 5px;
        padding: 0.5rem 2.5rem;
        margin-top: 2rem;
        background-color: transparent;
        transition-duration: 0.2s;
        width: 100%;
        

        :hover {
            background-color: var(--color-grey4);
            color: #fff;
        }
    }

    button.delete {
            border: 1px solid red;

            :hover {
                background-color: red;
                color: #fff;
            }
        }
`