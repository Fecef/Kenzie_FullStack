import { createGlobalStyle } from "styled-components";

import { Colors } from "./colors";

export const GlobalStyle = createGlobalStyle`
    body {
        background-color: ${Colors.grey8};
        font-family: "Inter";
    }   
`;

export const labelCSS = {
  fontSize: "14px",
  fontWeight: "500",
};

export const inputCSS = {
  "&:disabled": {
    opacity: "1",
    backgroundColor: Colors.grey7,
    cursor: "not-allowed",
  },
};
