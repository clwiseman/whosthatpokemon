import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";
import Canvas from "./components/canvas";
import EndScreen from "./components/endScreen";
import { ThemeProvider } from "styled-components";
import { find, randomPokemon } from "./helpers";
import pokedex from "./data/pokedex.json";

export enum gameStatusTypes {
  Ready,
  InProgress,
  Ended
}

export interface PokemonType {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  }
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  }
}

const App: React.FC = () => {
  const [gameStatus, setGameStatus] = useState(gameStatusTypes.Ready);
  const [pokemon, setPokemon] = useState({
    id: 0,
    name: {
      english: "",
      japanese: "",
      chinese: "",
      french: ""
    },
    type: [""],
    base: {
      HP: 0,
      Attack: 0,
      Defense: 0,
      "Sp. Attack": 0,
      "Sp. Defense": 0,
      Speed: 0
    }
  });
  const [pokedexId, setPokedexId] = useState(
    randomPokemon()
  );

  // Retrieve the Pokemon info
  useEffect(() => {
    if (pokedexId > 0) {
      const pokedexResult = find(pokedex, pokedexId);
      if (pokedexResult !== null) {
        setPokemon(pokedexResult);
      }
    }
  }, [pokedexId]);

  const handleGameStart = () => {
    setGameStatus(gameStatusTypes.InProgress);
  };

  const handleGameEnd = () => {
    setGameStatus(gameStatusTypes.Ended);
  };

  const handleGameRestart = () => {
    setPokedexId(randomPokemon());
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
            pokemon={pokemon}
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
