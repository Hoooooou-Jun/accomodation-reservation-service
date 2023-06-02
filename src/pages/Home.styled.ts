import styled from 'styled-components';
import { EColor } from '@/styles/color';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0px 24px 24px 24px;
`;

export const TitleBox = styled.div`
  position: relative;
  background-color: black;
  border-radius: 20px;
  margin-bottom: 16px;
`

export const ImageView = styled.div`
  position: 'absolute';
  width: 100%;
  height: 100%;
`
export const ImageTextView = styled.div`
  position: absolute;
  z-index: 1;
  margin: 84px;
  @media screen and (max-width: 768px) {
    margin: 24px;
  }
`

export const ImageText1 = styled.div`
  font-size: 96px;
  color: white;
  marginBottom: 10px;
  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`

export const ImageText2 = styled.div`
  font-size: 48px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`

export const ImageText3 = styled.div`
  font-size: 28px;
  color: white;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  padding: 8px;
`