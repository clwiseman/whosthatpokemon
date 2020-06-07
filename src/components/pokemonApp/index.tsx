import React, { useState, useEffect } from "react";
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Canvas from "../canvas";
import EndScreen from "../endScreen";
import { randomPokemon } from "../../helpers";
import {Pokemon, Query_Root} from "../../types/graphql-types";

export enum gameStatusTypes {
  Ready,
  InProgress,
  Ended
}

const GetPokemonByGen = gql`
  query PokemonQuery($generationID: [Int!]!) {
    pokemon(where: {generation_id: {_in: $generationID}}) {
      id
      name
    }
  }
`;

const PokemonApp: React.FC = () => {
  const [gameStatus, setGameStatus] = useState(gameStatusTypes.Ready);
  const [pokemon, setPokemon] = useState<Pokemon | undefined>(undefined);
  const [getPokemon, { loading, data }] = useLazyQuery<Query_Root>(GetPokemonByGen);
  const [drawnImage, setDrawnImage] = useState<CanvasImageSource | null>(null);

  // Retrieve the Pokemon info
  useEffect(() => {
    if (data && data?.pokemon) {
      setPokemon(randomPokemon(data.pokemon));
      setGameStatus(gameStatusTypes.InProgress);
    }
  }, [loading, data]);

  const handleGameStart = (pokedex: number[]) => {
    getPokemon({ variables: { generationID: pokedex } })
  };

  const handleGameEnd = () => {
    setGameStatus(gameStatusTypes.Ended);
  };

  const handleGameRestart = () => {
    setPokemon(undefined);
    setGameStatus(gameStatusTypes.Ready);
  };

  return gameStatus === gameStatusTypes.Ended ? (
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
  )
};

export default PokemonApp;
