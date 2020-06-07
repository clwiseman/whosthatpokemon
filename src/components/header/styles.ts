import styled from "styled-components";

export const Header = styled.h1`
  font-size: 7rem;
  text-align: center;
  color: ${props => props.theme.yellow};
  text-shadow: -4px 4px 0 ${props => props.theme.navyblue};
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: ${props => props.theme.blue};
`;
