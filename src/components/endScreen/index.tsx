import React, { useState } from "react";
import * as Styled from "./styles";
import Button from "../button";
import { PokemonType } from "../../App";

interface EndScreenProps {
  pokemon: PokemonType;
  handleGameRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({
  pokemon,
  handleGameRestart
}) => {
  const [guessing, setGuessing] = useState(true);
  const [guessRight, setGuessRight] = useState(true);
  const [answer, setAnswer] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const comparePokemon = (answer: string, pokemonName: string) => {
    if (answer.toLowerCase() === pokemonName.toLowerCase()) {
      setGuessRight(true);
    } else {
      setGuessRight(false);
    }
  };

  const handleAnswerSubmit = () => {
    setGuessing(false);
    comparePokemon(answer, pokemon.name.english);
  };

  return (
    <>
      {guessing ? (
        <Styled.TopBar>
          <Styled.TopBarText>Who's That Pokemon?</Styled.TopBarText>
          <Styled.Input
            type="text"
            value={answer}
            onChange={handleInputChange}
          />
          <Button text="Submit" handleClick={handleAnswerSubmit} />
        </Styled.TopBar>
      ) : (
        <Styled.TopBar>
          <Styled.TopBarTextReveal>
            {guessRight ? `You're Right! ` : `No way! `}
            It's
            <Styled.TopBarBold>{pokemon.name.english}</Styled.TopBarBold>!
          </Styled.TopBarTextReveal>
        </Styled.TopBar>
      )}
      <Styled.Container>
        <Styled.Canvas width="600" height="450" />
        <Styled.ImageContainer>
          <Styled.Image />
        </Styled.ImageContainer>
      </Styled.Container>
      <Styled.BottomBar>
        <Button text="New Game" handleClick={handleGameRestart} />
      </Styled.BottomBar>
    </>
  );
};

export default EndScreen;
