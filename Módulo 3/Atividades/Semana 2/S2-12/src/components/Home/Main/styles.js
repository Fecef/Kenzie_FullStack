import styled from "styled-components";

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1300px;
  margin: 0 auto;
  padding: 2.5rem 1.2rem;

  @media (min-width: 1280px) {
    justify-content: space-between;
  }
`;
export const Section = styled.section`
  width: 100%;

  @media (min-width: 1200px) {
    width: calc(1300px * 0.65);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const SearchResult = styled.h2`
  color: var(--color-gray100);
  font-size: var(--font-heading1);
  font-weight: var(--font-weight1);

  span {
    color: var(--color-gray50);
  }
`;

export const EraseBtn = styled.button`
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-gray0);
  font-size: var(--font-body600);
  font-weight: var(--font-weight3);
  padding: 0.5rem 1rem;

  :hover {
    background-color: var(--color-primary50);
  }
`;

export const Aside = styled.aside`
  width: 55.5rem;
  background-color: var(--color-gray0);
  border-radius: 5px;
  overflow: auto;

  @media (min-width: 1280px) {
    width: 36.5rem;
  }
`;
