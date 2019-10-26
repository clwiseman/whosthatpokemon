import styled from "styled-components";

export const Button = styled.button`
  background-color: pink;
  flex: 1;
  width: 100%;
  max-width: 8rem;
  margin-bottom: 1rem;

  &:first-child {
    margin-top: 1rem;
  }
`;

export const Icon = styled.svg`
  width: 4rem;
  height: 4rem;
  color: black;
`;
