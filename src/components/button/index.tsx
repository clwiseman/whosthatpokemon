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
      <Styled.IconButton onClick={handleClick}>
        <Icon icon={icon} dark={dark} />
      </Styled.IconButton>
    );
  }
  return <Styled.TextButton onClick={handleClick}>{text}</Styled.TextButton>;
};

export default Button;
