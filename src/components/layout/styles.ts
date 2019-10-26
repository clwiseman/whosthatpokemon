import styled from "styled-components";

export const Layout = styled.div`
  display: grid;
  grid-template-areas: "sidebar canvas rightbar";
  grid-template-columns: 1fr 1fr 1fr;
  background-color: lightgrey;
`;
