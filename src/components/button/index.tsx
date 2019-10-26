import React from "react";
import Icons from "../../images/icons.svg";
import * as Styled from "./styles";

interface ButtonProps {
  icon: string;
  // onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon }) => (
  <Styled.Button>
    <Styled.Icon>
      <use xlinkHref={`${Icons}#icon-${icon}`}></use>
    </Styled.Icon>
  </Styled.Button>
);

export default Button;
