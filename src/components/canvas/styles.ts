import styled from "styled-components";
import Action from "./index";

const pencil = "pencil.svg";
const eraser = "eraser.svg";

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TopBarText = styled.h2`
  font-family: inherit;
  font-weight: 400;
  color: ${props => props.theme.black};
  font-size: 3rem;
  margin: 0 3rem;
`;

export const TopBarBold = styled.span`
  font-weight: 700;
  margin-left: 1rem;
`;

export const DrawPad = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const Canvas = styled.canvas<{ drawState?: boolean }>`
  margin: 0 auto;
  border: 1px solid black;
  background-color: white;
  cursor: ${props =>
    props.drawState ? `url(${pencil}), auto` : `url(${eraser}), auto`};
`;
