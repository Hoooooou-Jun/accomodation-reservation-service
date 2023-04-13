import React from 'react'
import StyledNextButton from './style';
import { ButtonType } from '@/types/button';
import SvgContainer from './SvgContainer';

interface INextButton {
  type: ButtonType;
  svg: React.ReactElement<SVGElement>;
  onClick?: () => void;
}

const NextButton = ({ type, svg, onClick }: INextButton) => {
  console.log(type);
  return (
    <StyledNextButton buttonType={type} onClick={onClick}>
      <SvgContainer buttonType={type}>{svg}</SvgContainer>
    </StyledNextButton>
  )
}

export default NextButton;
