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
  handleGameStart: (pokedex: number) => void;
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
  const [selectedDex, setSelectedDex] = useState({ value: 0, label: "Choose Pokedex..." });

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

  const options = [
    { value: 1, label: "Gen 1" },
    { value: 2, label: "Gen 2" },
    { value: 3, label: "Gen 3" },
    { value: 4, label: "Gen 4" },
    { value: 5, label: "Gen 5" },
    { value: 6, label: "Gen 6" },
    { value: 7, label: "Gen 7" }
  ];

  // Event Handlers
  const handleChange = (option: { value: number, label: string }) => {
    setSelectedDex(option);
  };

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
            <Button text="End Game" handleClick={handleGameEnd} />
          </>
        ) : (
          <>
            <Styled.SelectMultiple
              name="Pokedex Selector"
              value={selectedDex}
              options={options}
              onChange={handleChange}
              closeMenuOnSelect={false}
              placeholder="Choose Pokedex..."
            />
            <Button text="Start Game" handleClick={() => handleGameStart(selectedDex.value)} />
          </>
        )}
      </Styled.TopBar>
      <Styled.Canvas
        ref={canvasRef}
        width="600"
        height="450"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseOut={handleMouseOut}
        onMouseUp={handleMouseUp}
      ></Styled.Canvas>
      <Styled.BottomBar>
        <Button icon="pencil" handleClick={handleCanvasDraw} small></Button>
        <Button icon="eraser" handleClick={handleCanvasErase} small></Button>
        <Button icon="trash" handleClick={handleCanvasClear} small></Button>
      </Styled.BottomBar>
    </Styled.DrawPad>
  );
};

export default Canvas;
