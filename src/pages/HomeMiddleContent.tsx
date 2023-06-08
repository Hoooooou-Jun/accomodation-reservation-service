import React from 'react';
import { EColor } from '@/styles/color';
import { ContentBox1, ContentBox2, ContentTitleText, ImageView, MiddleContentContainer } from './Home.styled';
import Image from 'next/image';
import TitleImage from '../../public/assets/asdf.jpeg';
import RoomItem from '@/components/RoomItem';

function HomeMiddleContent() {
  return (
    <MiddleContentContainer>
      <ContentBox1>
        <ContentTitleText>
          방 목록
        </ContentTitleText>
      </ContentBox1>
      <ContentBox2>
        <RoomItem image={TitleImage} />
        <RoomItem image={TitleImage} />
        <RoomItem image={TitleImage} />
        <RoomItem image={TitleImage} />
      </ContentBox2>
    </MiddleContentContainer>
  );
};

export default HomeMiddleContent;
