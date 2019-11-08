import React, { useState } from "react";
import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";
import Canvas from "./components/canvas";
import EndScreen from "./components/endScreen";
import { ThemeProvider } from "styled-components";

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
        <Header />
        {gameStatus === gameStatusTypes.Ended ? (
          <EndScreen handleGameRestart={handleGameRestart} />
        ) : (
          <Canvas
            handleGameStart={handleGameStart}
            handleGameEnd={handleGameEnd}
            gameStatus={gameStatus}
          />
        )}
      </>
    </ThemeProvider>
  );
};

export default App;
