import styled from "styled-components";

export const List = styled.menu`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding-bottom: 1.5rem;

  .div {
    text-align: center;
  }
`;

export const Header = styled.div`
  background-color: var(--color-primary);
  padding: 1.5rem;
`;

export const HeaderTitle = styled.h1`
  color: var(--color-gray0);
  font-size: var(--font-heading3);
  font-weight: var(--font-weight1);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  min-height: 14.8rem;
  max-height: 40rem;
  padding: 2rem 1.5rem;
  overflow-y: auto;
`;

export const EmptyMsg1 = styled.p`
  color: var(--color-gray100);
  font-size: var(--font-heading3);
  font-weight: var(--font-weight1);
  margin-top: 2.2rem;
`;

export const EmptyMsg2 = styled.span`
  color: var(--color-gray50);
  font-size: var(--font-body);
  font-weight: var(--font-weight3);
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 0 2rem 1.5rem;
`;
