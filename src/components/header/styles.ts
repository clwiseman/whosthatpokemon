import styled from "styled-components";

export const Header = styled.h1`
  font-size: 7rem;
  text-align: center;
  color: ${props => props.theme.yellow};
  text-shadow: 1px 1px 2px ${props => props.theme.navy};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${props => props.theme.blue};
`;
