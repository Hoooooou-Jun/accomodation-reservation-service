import React from 'react'
import StyledButton from './style';
import { ButtonType } from '@/types/button';

interface IButton {
  type: ButtonType;
  label: string;
  onClick?: () => void;
}

const Button = ({ type, label, onClick }: IButton) => {
  console.log(type);
  return <StyledButton buttonType={type} onClick={onClick}>{label}</StyledButton>
}

export default Button;
