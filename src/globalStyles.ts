import { createGlobalStyle } from "styled-components";

export const theme = {
  yellow: "#FFCC07",
  blue: "#2A71B4",
  lightblue: "#7ACCE6",
  lightestblue: "#E5FFFF",
  navyblue: "#1F3773",
  red: "#E23201",
  pink: "FE615F",
  white: "#ffffff",
  black: "#000000"
};

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Pokemon';
    src: local('Pokemon Solid Normal'), local('PokemonSolidNormal'),
        url('fonts/PokemonSolidNormal.woff2') format('woff2'),
        url('fonts/PokemonSolidNormal.woff') format('woff'),
        url('fonts/PokemonSolidNormal.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

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
    min-height: 100vh;
    box-sizing: border-box;
    font-family: "PT Mono", monospace;
    background-color: ${theme.white};
    font-size: 1.5rem;
  }

  button:focus,
  button:active {
    outline: none;
  }
`;
