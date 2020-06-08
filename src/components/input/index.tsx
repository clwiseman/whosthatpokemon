import React from "react";
import * as Styled from "./styles";

interface ButtonProps {
  value?: string
}

/**
 * Didn't test just adding some styles.
 * @param value 
 */
const Button: React.FC<ButtonProps> = ({ value, ...attributes }) => {
  return <Styled.Input {...attributes}>{value}</Styled.Input>;
};

export default Button;
