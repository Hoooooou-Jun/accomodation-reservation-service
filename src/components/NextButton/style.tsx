import styled from "styled-components";
import { EColor } from '@/styles/color';
import { ButtonType } from "@/types/button";

interface IStyledNextButtonProps {
  buttonType: ButtonType;
}

const StyledNextButton = styled.button<IStyledNextButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 0px solid;
  border-radius: 10px;
  background: ${({ buttonType }) => buttonType === 'secondary' ? EColor.TEXT_500 : EColor.COLOR_INTERACTION};
`

export default StyledNextButton;
