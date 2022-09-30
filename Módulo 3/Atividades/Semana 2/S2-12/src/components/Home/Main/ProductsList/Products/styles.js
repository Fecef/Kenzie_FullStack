import styled from "styled-components";

export const Card = styled.li`
  background-color: var(--color-gray0);
  border: 2px solid var(--color-gray20);
  border-radius: 5px;
  height: 34.6rem;
  min-width: 25rem;
  overflow: hidden;

  :hover {
    border-color: var(--color-gray-100);
  }
`;

export const DivImg = styled.div`
  text-align: center;
  background-color: var(--color-gray0);
  height: 50%;
`;

export const Img = styled.img`
  display: unset;
  object-fit: cover;
  max-height: 100%;
`;

export const DivText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  background-color: #fff;
  padding: 1.5rem;
  height: 50%;
`;

export const Title = styled.h1`
  color: var(--color-gray100);
  font-size: var(--font-heading3);
  font-weight: var(--font-weight1);
`;

export const Category = styled.span`
  color: var(--color-gray50);
  font-size: var(--font-caption);
  font-weight: var(--font-weight3);
`;

export const Price = styled.span`
  color: var(--color-primary);
  font-size: var(--font-body600);
  font-weight: var(--font-weight2);
`;

export const Button = styled.button`
  border-radius: 8px;
  background-color: var(--color-primary);
  color: var(--color-gray0);
  font-size: var(--font-body600);
  font-weight: var(--font-weight3);
  padding: 0.5rem 1rem;
  transition-duration: .1s;

  :hover {
    background-color: var(--color-primary50);
  }
`;
