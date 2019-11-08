import styled from "styled-components";

export const TopBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const TopBarText = styled.h2`
  font-family: inherit;
  font-weight: 400;
  color: ${props => props.theme.black};
  font-size: 3rem;
  margin: 0 3rem;
`;

export const TopBarTextReveal = styled(TopBarText)`
  margin: 2rem 0;
`;

export const TopBarBold = styled.span`
  font-weight: 700;
  margin-left: 1rem;
`;

export const Input = styled.input`
  width: 24rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  padding: 0 1rem;
  margin-right: 1rem;
`;

export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
`;

export const Canvas = styled.canvas`
  border: 1px solid black;
  background-color: white;
  margin: 0 auto;
`;

export const ImageContainer = styled.div``;

export const Image = styled.img`
  margin: 0 auto;
`;

export const BottomBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
