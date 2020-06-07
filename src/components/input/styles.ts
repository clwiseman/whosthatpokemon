import styled from "styled-components";

export const Input = styled.input<{}>`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif; 
  background-color: ${props => props.theme.white};
  color: ${props => props.theme.navyblue};
  margin: 2rem 2rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-family: inherit;
`;
