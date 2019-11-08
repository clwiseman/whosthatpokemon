import React, { useState, useEffect, useRef } from "react";
import * as Styled from "./styles";
import Button from "../button";
import { PokemonType } from "../../App";
import { imageFileName } from "../../helpers";

interface EndScreenProps {
  pokemon: PokemonType;
  handleGameRestart: () => void;
  drawnImage: CanvasImageSource | null;
}

const EndScreen: React.FC<EndScreenProps> = ({
  pokemon,
  handleGameRestart,
  drawnImage
}) => {
  const [guessing, setGuessing] = useState(true);
  const [guessRight, setGuessRight] = useState(true);
  const [answer, setAnswer] = useState("");
  const fileName = imageFileName(pokemon.id);
  const imagePath = require(`../../data/images/${fileName}`);

  const canvasRef = useRef(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  };

  const comparePokemon = (answer: string, pokemonName: string) => {
    setGuessRight(answer.toLowerCase() === pokemonName.toLowerCase());
  };

  const handleAnswerSubmit = () => {
    setGuessing(false);
    comparePokemon(answer, pokemon.name.english);
  };

  const getCanvasContext = () => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx !== null) {
        return ctx;
      }
    }
    return null;
  };

  useEffect(() => {
    const ctx = getCanvasContext();
    if (ctx !== null && drawnImage !== null) {
      ctx.drawImage(drawnImage, 0, 0);
    }
  }, [drawnImage]);

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
        <Styled.Canvas ref={canvasRef} width="600" height="450" />
        <Styled.ImageContainer>
          {!guessing && (
            <Styled.Image
              src={imagePath}
              alt={`A picture of ${pokemon.name.english}`}
            />
          )}
        </Styled.ImageContainer>
      </Styled.Container>
      <Styled.BottomBar>
        <Button text="New Game" handleClick={handleGameRestart} />
      </Styled.BottomBar>
    </>
  );
};

export default EndScreen;
