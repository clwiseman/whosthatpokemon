import React from "react";
import DrawTools from "../drawTools";
import Canvas from "../canvas";
import * as Styled from "./styles";

const Layout = () => (
  <Styled.Layout>
    <DrawTools />
    <Canvas />
  </Styled.Layout>
);

export default Layout;
