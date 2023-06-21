import styled from 'styled-components';
import { EColor } from '@/styles/color';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 24px 24px 24px;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 24px 24px;
  background-color: ${EColor.TEXT_300}
`

export const MiddleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 24px 24px 24px;
  background-color: ${EColor.TEXT_200}
`

export const ContentBox1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px;
  width: 90%;
`

export const ContentBox2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  @media screen and (max-width: 1200px) {
    flex-direction: column
  }
  padding: 48px;
`

export const TitleBox = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`

export const ImageView = styled.div`
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

export const DatePickerView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  @media screen and (max-width: 1200px) {
    flex-direction: column
  }
  padding: 48px;
`

export const TitleText1 = styled.div`
  display: flex;
  font-size: 72px;
  color: ${EColor.TEXT_800};
  font-weight: bold;
  marginBottom: 10px;
  @media screen and (max-width: 868px) {
    font-size: 36px;
  }
`

export const ContentTitleText = styled.div`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  color: ${EColor.TEXT_900};
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`
export const ContentText = styled.div`
  width: 600px;
  font-size: 20px;
  text-align: center;
  color: ${EColor.TEXT_900};
  @media screen and (max-width: 768px) {
    font-size: 16px;
    width: 326px;
  }
`
export const RoomTextView = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1200px) {
    flex-direction: column
  }
  padding: 48px;

`

export const RoomTextAlignView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px;
  width: 100%;
`

export const SelectedView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 28px;
  width: 100%;
`