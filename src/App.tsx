import React from "react";
import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";
import Canvas from "./components/canvas";
import { ThemeProvider } from "styled-components";
import * as Styled from "./Appstyles";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Styled.Layout>
          <Header />
          <Canvas />
        </Styled.Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
