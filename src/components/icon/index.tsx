import React from "react";
import Icons from "../../images/icons.svg";
import * as Styled from "./styles";

interface IconProps {
  icon: string;
  dark?: boolean;
}

const Icon: React.FC<IconProps> = ({ icon, dark }) => (
  <Styled.Icon dark={dark}>
    <use xlinkHref={`${Icons}#icon-${icon}`}></use>
  </Styled.Icon>
);

export default Icon;
