import styled from "styled-components";
import { EColor } from '@/styles/color';
import { ButtonType } from "@/types/button";

interface IStyledIconButtonProps {
  buttonType: ButtonType;
}

const StyledIconButton = styled.button<IStyledIconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 273px;
  height: 48px;
  border: 2px solid ${EColor.COLOR_INTERACTION};
  border-radius: 10px;
  font-size: 16pt;
  background: ${({ buttonType }) => buttonType === 'secondary' ? EColor.TEXT_200 : EColor.COLOR_INTERACTION};
  color: ${({ buttonType }) => buttonType === 'secondary' ? EColor.COLOR_INTERACTION : EColor.TEXT_200};
`

export default StyledIconButton;
