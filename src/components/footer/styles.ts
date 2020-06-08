import styled from "styled-components";

export const Footer = styled.footer`
  background: ${props => props.theme.navyblue};
  color: ${props => props.theme.white};
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding: 5rem;
`;
