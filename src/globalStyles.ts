import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC|DM+Sans&display=swap');
  
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
    font-family: "DM Sans", sans-serif;
  }

  button:focus,
  button:active {
    outline: none;
  }

  h1 {
    font-family: "Bowlby One SC", serif;
  }
`;

export const theme = {
  yellow: "#FFCB05",
  blue: "#3D7DCA",
  navyblue: "#003A70",
  red: "#EE1515",
  white: "#f0f0f0",
  black: "#222224",
  greydark: "#2D3047"
};
