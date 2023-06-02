import React from 'react';
import { ImageText1, ImageText2, ImageText3, ImageTextView, ImageView, MainContainer, TitleBox } from './Home.styled';
import Image from 'next/image';
import TitleImage from '../../public/assets/main.png';

function HomeTitle() {
  return (
    <MainContainer>
      <TitleBox>
        <ImageTextView>
          <ImageText1>
            Hansei Accomodation
          </ImageText1>
          <ImageText2>
            힐링과 즐거움을 담은 특별한 공간
          </ImageText2>
          <ImageText3>
            당신의 아름다운 순간을 만들어 드립니다.
          </ImageText3>
        </ImageTextView>
        <ImageView>
          <Image style={{ display: 'flex',  borderRadius: 20, width: '100%', height: '100%', opacity: 0.7 }} src={TitleImage} alt='asdf' />
        </ImageView>
      </TitleBox>

    </MainContainer>
  );
};

export default HomeTitle;
