import React, { useState } from "react";
import * as Styled from "./styles";
import Button from "../button";

interface EndScreenProps {
  handleGameRestart: () => void;
}

const EndScreen: React.FC<EndScreenProps> = ({ handleGameRestart }) => {
  const [guessing, setGuessing] = useState(true);

  const handleAnswerSubmit = () => {
    setGuessing(false);
  };

  return (
    <>
      {guessing ? (
        <Styled.TopBar>
          <Styled.TopBarText>Who's That Pokemon?</Styled.TopBarText>
          <Styled.Input />
          <Button text="Submit" handleClick={handleAnswerSubmit} />
        </Styled.TopBar>
      ) : (
        <Styled.TopBar>
          <Styled.TopBarTextReveal>
            It's
            <Styled.TopBarBold>Bulbasaur</Styled.TopBarBold>!
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
