import styled from "styled-components";

export const StyleContainerSearch = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 75%;

  .searchContainer {
    display: flex;
    align-items: center;
    border-radius: 4px;
    padding: 1rem;
    overflow: auto;
    border: 1px solid var(--color-grey2);
    background-color: #fff;
  }

  .searchContainer input {
    border: none;
    background-color: #fff;
    width: 100%;
    padding: 0 0.5rem;
  }

  svg {
    color: var(--color-grey2);
    margin: 0 auto;
  }

  select {
    width: 100%;
    border-radius: 0.5rem;
    border: none;
    padding: 1.5rem 1rem;
  }
`;
