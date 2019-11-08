import styled from "styled-components";
import Select from "react-select";

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

export const Canvas = styled.canvas`
  margin: 0 auto;
  border: 1px solid black;
  background-color: white;
`;

export const SelectMultiple = styled(Select)`
  width: 36rem;
  height: 4.5rem;
  font-size: 2rem;
`;
