import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { GlobalStyle, theme } from "./globalStyles";
import Header from "./components/header";
import Canvas from "./components/canvas";
import EndScreen from "./components/endScreen";
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
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
}


const client = new ApolloClient({
  uri: 'https://whos-that-pokemon-api.herokuapp.com/v1/graphql',
  headers: {
    'X-Hasura-Admin-Secret': process.env.REACT_APP_HASURA_SECRET,
  },
});

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
  const [pokedexId, setPokedexId] = useState(0);
  const [drawnImage, setDrawnImage] = useState<CanvasImageSource | null>(null);

  // Retrieve the Pokemon info
  useEffect(() => {
    if (pokedexId > 0) {
      const pokedexResult = find(pokedex, pokedexId);
      if (pokedexResult !== null) {
        setPokemon(pokedexResult);
      }
    }
  }, [pokedexId]);

  const handleGameStart = (pokedex: number) => {
    setPokedexId(randomPokemon(pokedex));
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
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Header />
        {gameStatus === gameStatusTypes.Ended ? (
          <EndScreen
            handleGameRestart={handleGameRestart}
            pokemon={pokemon}
            drawnImage={drawnImage}
          />
        ) : (
          <Canvas
            pokemon={pokemon}
            handleGameStart={handleGameStart}
            handleGameEnd={handleGameEnd}
            gameStatus={gameStatus}
            handleImageCopy={setDrawnImage}
          />
        )}
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
