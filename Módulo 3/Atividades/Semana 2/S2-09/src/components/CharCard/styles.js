import styled from "styled-components";

export const Img = styled.img`
  width: 90%;
  height: 90%;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 13rem;
  height: 15rem;
  background-color: ${({ status }) =>
    status === "Alive" ? "#f1f7ff" : "#f8ccce"};
  border: 1px solid
    ${({ status }) =>
      status === "Dead" || status === "unknown" ? "#b28688" : "Transparent"};
  border-radius: 8px;
  padding: 1rem;
`;

export const H2 = styled.h2`
  color: #78b9ca;
`;
