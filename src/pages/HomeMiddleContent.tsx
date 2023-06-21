import React from 'react';
import { EColor } from '@/styles/color';
import { ContentBox1, ContentBox2, ContentTitleText, ImageView, MiddleContentContainer } from './Home.styled';
import Image from 'next/image';
import room1 from '../../public/assets/room_104.jpg';
import room2 from '../../public/assets/room_203.jpg';
import room3 from '../../public/assets/room_304.jpg';
import room4 from '../../public/assets/room_403.jpg';
import RoomItem from '@/components/RoomItem';
import { useRecoilState } from 'recoil';
import { roomData } from '@/state/state';

function HomeMiddleContent() {
  const [roomDb, set_roomDb] = useRecoilState(roomData);
  return (
    <MiddleContentContainer>
      <ContentBox1>
        <ContentTitleText>
          방 목록
        </ContentTitleText>
      </ContentBox1>
      <ContentBox2>
        <RoomItem image={room1} title={"이공관 104호"} content={"조식 제공"} price={"12,000"}/>
        <RoomItem image={room2} title={"이공관 203호"} content={"조식 제공"} price={"15,000"}/>
        <RoomItem image={room3} title={"이공관 304호"} content={"조식 제공"} price={"17,000"}/>
        <RoomItem image={room4} title={"이공관 403호"} content={"조식 제공"} price={"20,000"}/>
      </ContentBox2>
    </MiddleContentContainer>
  );
};

export default HomeMiddleContent;
