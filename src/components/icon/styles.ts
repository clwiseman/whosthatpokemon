import styled from "styled-components";

export const Icon = styled.svg<{ dark?: boolean }>`
  width: 3.5rem;
  height: 3.5rem;
  fill: ${props => (props.dark ? props.theme.black : props.theme.white)};
`;
