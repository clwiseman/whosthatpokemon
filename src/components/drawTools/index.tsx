import React from "react";
import * as Styled from "./styles";
import Button from "../button";

const DrawTools = () => (
  <Styled.Sidebar>
    <Button icon="pencil"></Button>
    <Button icon="eraser"></Button>
    <Button icon="trash"></Button>
  </Styled.Sidebar>
);

export default DrawTools;
