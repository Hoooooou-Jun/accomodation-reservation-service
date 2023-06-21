import React from 'react';
import { MainContainer, TitleBox } from './Request.styled';
import { TitleText1 } from './Request.styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { roomData } from '@/state/state';

function InfoTitle() {
  const [roomDb, set_roomDb] = useRecoilState(roomData);
  console.log(roomDb);
  return (
    <MainContainer>
      <TitleBox>
        <TitleText1>
          Last Minute Deal
        </TitleText1>
      </TitleBox>
    </MainContainer>
  );
};

export default InfoTitle;
