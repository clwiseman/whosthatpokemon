import React, { useRef, useState } from "react";
import Button from "../button";
import * as Styled from "./styles";

enum Action {
  Draw,
  Erase
}

const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [locations, setLocations] = useState({ x: 0, y: 0 });
  const canvasRef = useRef(null);

  const draw = (ctx: CanvasRenderingContext2D, e: React.MouseEvent) => {
    if (!isDrawing) return;

    ctx.strokeStyle = `hsl(0, 100%, 50%)`;
    ctx.beginPath();
    // start from

    ctx.moveTo(locations.x, locations.y);
    // go to
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.stroke();
    setLocations({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDrawing(true);
    setLocations({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseUp = () => setIsDrawing(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const canvas = canvasRef.current as HTMLCanvasElement | null;
    if (canvas !== null) {
      const ctx = canvas.getContext("2d");
      if (ctx !== null) {
        draw(ctx, e);
      }
    }
  };

  return (
    <Styled.DrawPad>
      <Styled.TopBar>
        <Button text={"Start Game"} />
      </Styled.TopBar>
      <Styled.Canvas
        ref={canvasRef}
        width="800"
        height="500"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      ></Styled.Canvas>
      <Styled.BottomBar>
        <Button icon="pencil"></Button>
        <Button icon="eraser"></Button>
        <Button icon="trash"></Button>
      </Styled.BottomBar>
    </Styled.DrawPad>
  );
};

export default Canvas;
