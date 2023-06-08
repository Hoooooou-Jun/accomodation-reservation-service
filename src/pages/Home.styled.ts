import styled from 'styled-components';
import { EColor } from '@/styles/color';

export const SvgContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const SvgBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  padding: 54px;
  background-color: ${EColor.COLOR_ACCENT};
  border-radius: 128px;
  margin: 36px;
`

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
  padding: 48px;
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
  position: relative;
  background-color: ${EColor.TEXT_900};
  border-radius: 20px;
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

export const ImageText1 = styled.div`
  font-size: 96px;
  color: ${EColor.TEXT_200};
  marginBottom: 10px;
  @media screen and (max-width: 868px) {
    font-size: 36px;
  }
`

export const ImageText2 = styled.div`
  font-size: 48px;
  color: ${EColor.TEXT_200};
  @media screen and (max-width: 868px) {
    font-size: 20px;
  }
`

export const ImageText3 = styled.div`
  font-size: 28px;
  color: ${EColor.TEXT_200};
  @media screen and (max-width: 868px) {
    font-size: 16px;
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

export const SvgContainerTitleText = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`

export const SvgContainerText = styled.div`
  width: 158px;
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`