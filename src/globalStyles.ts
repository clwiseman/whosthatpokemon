import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    /* 1rem = 10px */
    font-size: 62.5%;
  }

  body {
    box-sizing: border-box;
  }
`;
