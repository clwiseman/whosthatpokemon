import React from "react";
import Icon from "../icon";
import * as Styled from "./styles";

interface ButtonProps {
  icon?: string;
  text?: string;
  dark?: boolean;
  // onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ icon, text, dark }) => {
  if (icon) {
    return (
      <Styled.IconButton>
        <Icon icon={icon} dark={dark} />
      </Styled.IconButton>
    );
  }
  return <Styled.TextButton>{text}</Styled.TextButton>;
};

export default Button;
