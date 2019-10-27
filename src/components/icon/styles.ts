import styled from "styled-components";

export const Icon = styled.svg<{ dark?: boolean }>`
  width: 4rem;
  height: 4rem;
  color: ${props => (props.dark ? props.theme.black : props.theme.white)};
`;
