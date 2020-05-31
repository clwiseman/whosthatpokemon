import React, { useRef, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Button from "../button";
import Timer from "../timer";
import * as Styled from "./styles";
import { gameStatusTypes, PokemonType } from "../../App";

const GENERATIONS = gql`
  {
    generations {
      id
      name
    }
  }
`;

export enum Action {
  Draw,
  Erase,
}

interface CanvasProps {
  handleGameStart: (pokedex: number) => void;
  handleGameEnd: () => void;
  gameStatus: gameStatusTypes;
  pokemon: PokemonType;
  handleImageCopy: (canvas: CanvasImageSource | null) => void;
}

const Canvas: React.FC<CanvasProps> = ({
  handleGameStart,
  handleGameEnd,
  handleImageCopy,
  gameStatus,
  pokemon,
}) => {
  const { loading: genLoading, error: genError, data: genData } = useQuery(
    GENERATIONS
  );
  const [isDrawing, setIsDrawing] = useState(false);
  const [locations, setLocations] = useState([] as { x: number; y: number }[]);
  const [action, setAction] = useState(Action.Draw);
  const [selectedDex, setSelectedDex] = useState({
    value: 0,
    label: "Choose Pokedex...",
  });

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
    if (canvasRef !== null && canvasRef.current !== null) {
      handleImageCopy(canvasRef.current!);
    }
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

  let options;

  if (genData !== undefined) {
    options = genData.generations.map(
      ({ id, name }: { id: number; name: string }) => {
        return { value: id, label: name };
      }
    );
  }

  // Event Handlers
  const handleChange = (option: { value: number; label: string }) => {
    setSelectedDex(option);
  };

  const handleCanvasDraw = () => {
    setAction(Action.Draw);
  };

  const handleCanvasErase = () => {
    setAction(Action.Erase);
  };

  const handleCanvasClear = () => {
    setAction(Action.Draw);
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
              <Styled.TopBarBold>{pokemon.name}</Styled.TopBarBold>
            </Styled.TopBarText>
            <Timer handleGameEnd={handleGameEnd} />
            <Button text="End Game" handleClick={handleGameEnd} />
          </>
        ) : (
          <>
            {genLoading && <div>Loading...</div>}
            {genError && <div>Whoops! Something went wrong.</div>}
            {genData && (
              <>
                <Styled.SelectMultiple
                  name="Pokedex Selector"
                  value={selectedDex}
                  options={options}
                  onChange={handleChange}
                  closeMenuOnSelect={false}
                  placeholder="Choose Pokedex..."
                />
                <Button
                  text="Start Game"
                  handleClick={() => handleGameStart(selectedDex.value)}
                />
              </>
            )}
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
        drawState={action === Action.Draw}
      ></Styled.Canvas>
      <Styled.BottomBar>
        <Button
          icon="pencil"
          handleClick={handleCanvasDraw}
          drawState={action === Action.Draw}
          small
        ></Button>
        <Button
          icon="eraser"
          handleClick={handleCanvasErase}
          drawState={action === Action.Erase}
          small
        ></Button>
        <Button icon="trash" handleClick={handleCanvasClear} small></Button>
      </Styled.BottomBar>
    </Styled.DrawPad>
  );
};

export default Canvas;
