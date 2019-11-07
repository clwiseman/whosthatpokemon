import React, { useState } from "react";
import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";
import Canvas from "./components/canvas";
import { ThemeProvider } from "styled-components";
import * as Styled from "./Appstyles";

export enum gameStatusTypes {
  Ready,
  InProgress,
  Ended
}

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState(gameStatusTypes.Ready);

  const handleGameStart = () => {
    setGameStatus(gameStatusTypes.InProgress);
  };

  const handleGameEnd = () => {
    setGameStatus(gameStatusTypes.Ended);
  };

  const handleGameRestart = () => {
    setGameStatus(gameStatusTypes.Ready);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Styled.Layout>
          <Header />
          <Canvas
            handleGameStart={handleGameStart}
            handleGameEnd={handleGameEnd}
            gameStatus={gameStatus}
          />
        </Styled.Layout>
      </>
    </ThemeProvider>
  );
};

export default App;
