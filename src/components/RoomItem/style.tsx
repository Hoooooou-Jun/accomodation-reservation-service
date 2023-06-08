import styled, { css, keyframes } from "styled-components";
import { EColor } from '@/styles/color';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align=items: center;
  padding: 12px;
  border: 2px solid;
  border-radius: 20px;
  border-color: ${EColor.TEXT_400};
  margin: 12px
`

export const RoomTitle = styled.div`
  display: flex;
  text-align: start;
  font-size: 32px;
  font-weight: lighter;
  text-align: center;
  color: ${EColor.TEXT_900};
`

export const RoomContent = styled.div`
  display: flex;
  text-align: start;
  font-size: 18px;
  font-weight lighter;
  text-align: center;
  color: ${EColor.TEXT_700};
`

export const RoomPrice = styled.div`
  display: flex;
  text-align: start;
  font-size: 24px;
  font-weight lighter;
  text-align: center;
  color: ${EColor.COLOR_ACCENT};
`