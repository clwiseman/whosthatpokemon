import styled from "styled-components";

export const BackgroundImage = styled.img`
  position: relative;
  top: 0;
  left: 0;
`;

export const Header = styled.h1`
  font-family: "Pokemon", arial, serif;
  letter-spacing: 5px;
  font-size: 2.5rem;
  color: ${props => props.theme.yellow};
  text-shadow: -2px 2px 0 ${props => props.theme.navyblue};
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: ${props => props.theme.blue};
  transform: rotate(-14deg);
  position: absolute;
  top: 4rem;
  left: 0.5rem;
`;
