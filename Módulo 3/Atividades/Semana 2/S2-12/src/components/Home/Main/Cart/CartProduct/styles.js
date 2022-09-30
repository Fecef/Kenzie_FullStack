import styled from "styled-components";

export const Card = styled.li`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
`;

export const ImgContainer = styled.div`
  max-width: 8rem;
  max-height: 8rem;
  background-color: var(--color-gray20);
  border-radius: 5px;
`;

export const Img = styled.img`
  width: 8rem;
  height: 8rem;
  object-fit: cover;
`;
export const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.h2`
  color: var(--color-gray100);
  font-size: var(--font-heading4);
  font-weight: var(--font-weight1);
`;

export const Category = styled.span`
  color: var(--color-gray50);
  font-size: var(--font-caption);
  font-weight: var(--font-weight3);
`;

export const RemoveBtn = styled.span`
  position: absolute;
  right: 0;
  top: 0;
  color: var(--color-gray50);
  font-size: var(--font-caption);
  font-weight: var(--font-weight3);
  cursor: pointer;
`;
