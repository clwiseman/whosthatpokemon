import styled from "styled-components";

export const Button = styled.button<{ drawState?: boolean; small?: boolean }>`
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif; 
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  margin: 2rem 2rem;
  width: ${props => (props.small ? "12rem" : "18rem")};
  height: 4.5rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-family: inherit;
  cursor: pointer;

  :hover {
    background-color: ${props => props.theme.pink};
  }
`;
