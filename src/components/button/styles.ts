import styled from "styled-components";

const Button = styled.button`
  margin: 1rem 2rem;
  width: 20rem;
  height: 5rem;
  border-radius: 0.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  font-size: 2rem;
`;

export const IconButton = styled(Button)`
  background-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
`;

export const TextButton = styled(Button)`
  background-color: ${props => props.theme.navyblue};
  color: ${props => props.theme.white};
`;
