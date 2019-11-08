import styled from "styled-components";

export const Button = styled.button<{ drawState?: boolean }>`
  background-color: ${props =>
    props.drawState ? props.theme.blue : props.theme.navyblue};
  color: ${props => props.theme.white};
  margin: 2rem 2rem;
  width: 18rem;
  height: 4.5rem;
  border-radius: 0.5rem;
  font-size: 2rem;
  font-family: inherit;
  cursor: pointer;

  :hover {
    transform: translateY(-2px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
  }

  :active,
  :focus {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }
`;
