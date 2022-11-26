import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: var(--color-grey4);
  color: var(--color-grey1);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.4);
  border-radius: 8px;
  border: 2px solid var(--color-grey4);
  font-weight: 800;
  font-size: var(--font-size2);
  padding: 0.5rem 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ReminderButtonStyled = styled.button`
  width: 6.5rem;
  height: 5.8rem;
  border-radius: 16px;

  /* Tem que passar o background-color via prop (color)*/
  background-color: ${(prop) => prop.color};

  color: #ffffff;
  font-size: var(--font-size2);
  text-align: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const LogoutButton = styled.button`
  background-color: transparent;
  color: #dadada;
  font-weight: 800;
  font-size: var(--font-size2);
  margin: 0 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
