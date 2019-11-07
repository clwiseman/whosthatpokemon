import React, { useRef, useState } from "react";
import Button from "../button";
import Timer from "../timer";
import * as Styled from "./styles";
import { gameStatusTypes, PokemonType } from "../../App";

enum Action {
  Draw,
  Erase
}

interface CanvasProps {
  handleGameStart: () => void;
  handleGameEnd: () => void;
  gameStatus: gameStatusTypes;
  pokemon: PokemonType;
}

const Canvas: React.FC<CanvasProps> = ({
  handleGameStart,
  handleGameEnd,
  gameStatus,
  pokemon
}) => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [locations, setLocations] = useState([] as { x: number; y: number }[]);
  const [action, setAction] = useState(Action.Draw);

  const canvasRef = useRef(null);

  const draw = (ctx: CanvasRenderingContext2D, e: React.MouseEvent) => {
    if (!isDrawing) return;

    if (action === Action.Erase) {
      ctx.globalCompositeOperation = "destination-out";
      ctx.lineWidth = 15;
    }

    if (action === Action.Draw) {
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 1;
    }

    ctx.beginPath();
    // start from
    let lastPosition = locations.pop();
    if (lastPosition === undefined) {
      lastPosition = { x: 0, y: 0 };
    }
    ctx.moveTo(lastPosition.x, lastPosition.y);
    // go to
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    const newLocation = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    setLocations([...locations, newLocation]);
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

  // Event Handlers
  const handleCanvasDraw = () => {
    setAction(Action.Draw);
  };

  const handleCanvasErase = () => {
    setAction(Action.Erase);
  };

  const handleCanvasClear = () => {
    const context = getCanvasContext();
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (context !== null && canvas !== null)
      context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    const newLocation = { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY };
    setLocations([...locations, newLocation]);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const context = getCanvasContext();
    if (context !== null) draw(context, e);
  };

  const handleMouseOut = () => setIsDrawing(false);

  const handleMouseUp = () => setIsDrawing(false);

  return (
    <Styled.DrawPad>
      <Styled.TopBar>
        {gameStatus === gameStatusTypes.InProgress ? (
          <>
            <Styled.TopBarText>
              Draw:
              <Styled.TopBarBold>{pokemon.name.english}</Styled.TopBarBold>
            </Styled.TopBarText>
            <Timer />
            <Button text={"End Game"} handleClick={handleGameEnd} />
          </>
        ) : (
          <Button text={"Start Game"} handleClick={handleGameStart} />
        )}
      </Styled.TopBar>
      <Styled.Canvas
        ref={canvasRef}
        width="800"
        height="450"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onMouseUp={handleMouseUp}
      ></Styled.Canvas>
      <Styled.BottomBar>
        <Button icon="pencil" handleClick={handleCanvasDraw}></Button>
        <Button icon="eraser" handleClick={handleCanvasErase}></Button>
        <Button icon="trash" handleClick={handleCanvasClear}></Button>
      </Styled.BottomBar>
    </Styled.DrawPad>
  );
};

export default Canvas;
