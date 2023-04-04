import React from 'react'
import styled from "styled-components";
import { EColor } from '@/styles/color';

type ButtonType = "primary" | "secondary";

interface IButton {
  type: ButtonType;
  label: string;
  onClick?: () => void;
}

interface IButtonProps {
  buttonType: ButtonType;
}

const StyledButton = styled.button<IButtonProps>`
  width: 275px;
  height: 50px;
  outline: none;
  outline-color: none;
  border: 2px solid ${({ buttonType }) => buttonType === 'secondary' ? EColor.COLOR_INTERACTION : EColor.TEXT_200};
  border-radius: 10px;
  font-size: 16pt;
  background: ${({ buttonType }) => buttonType === 'secondary' ? EColor.TEXT_200 : EColor.COLOR_INTERACTION};
  color: ${({ buttonType }) => buttonType === 'secondary' ? EColor.COLOR_INTERACTION : EColor.TEXT_200};
`

const Button = ({ type, label, onClick }: IButton) => {
  console.log(type);
  return <StyledButton buttonType={type} onClick={onClick}>{label}</StyledButton>
}

export default Button;
