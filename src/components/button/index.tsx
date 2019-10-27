import React from "react";
import Icon from "../icon";
import * as Styled from "./styles";

interface ButtonProps {
  icon?: string;
  text?: string;
  dark?: boolean;
  handleClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, dark, handleClick }) => {
  if (icon) {
    return (
      <Styled.Button onClick={handleClick}>
        <Icon icon={icon} dark={dark} />
      </Styled.Button>
    );
  }
  return <Styled.Button onClick={handleClick}>{text}</Styled.Button>;
};

export default Button;
