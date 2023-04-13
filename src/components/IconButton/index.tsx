import React from 'react'
import StyledIconButton from './style';
import { ButtonType } from '@/types/button';
import SvgContainer from './SvgContainer';

interface IIconButton {
  type: ButtonType;
  label: string;
  svg: React.ReactElement<SVGElement>;
  onClick?: () => void;
}

const IconButton = ({ type, label, svg, onClick }: IIconButton) => {
  console.log(type);
  return (
    <StyledIconButton buttonType={type} onClick={onClick}>
      <SvgContainer buttonType={type}>
        {svg}
      </SvgContainer>
      {label}
    </StyledIconButton>
  )
}

export default IconButton;
