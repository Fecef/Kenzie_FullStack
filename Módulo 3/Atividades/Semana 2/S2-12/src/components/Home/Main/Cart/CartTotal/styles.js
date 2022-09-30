import styled from "styled-components";

export const Hr = styled.hr`
  background-color: var(--color-gray20);
  border: none;
  height: 2px;
`;

export const TotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TotalText = styled.span`
  color: var(--color-gray100);
  font-size: var(--font-heading4);
  font-weight: var(--font-weight2);
`;

export const TotalValue = styled.span`
  color: var(--color-gray50);
  font-size: var(--font-heading4);
  font-weight: var(--font-weight2);
`;

export const RemoveBtn = styled.button`
  border-radius: 8px;
  background-color: var(--color-gray20);
  color: var(--color-gray50);
  font-size: var(--font-body600);
  font-weight: var(--font-weight2);
  padding: 1.2rem;
  transition-duration: 0.1s;

  :hover {
    color: var(--color-gray20);
    background-color: var(--color-gray50);
  }
`;
