import styled from "styled-components";
import { EColor } from '@/styles/color';
import { ButtonType } from "@/types/button";

interface SvgContainerButtonProps {
  buttonType: ButtonType;
}

const SvgContainer = styled.div<SvgContainerButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  stroke: ${({ buttonType }) => buttonType === 'secondary' ? EColor.TEXT_700 : EColor.TEXT_200};
`

export default SvgContainer;