import React from 'react';
import { MainContainer, TitleBox } from './Check.styled';
import { TitleText1 } from './Check.styled';
import { useRecoilState, useRecoilValue } from 'recoil';
import { roomData } from '@/state/state';

function CheckTitle() {
  return (
    <MainContainer>
      <TitleBox>
        <TitleText1>
          예약 조회
        </TitleText1>
      </TitleBox>
    </MainContainer>
  );
};

export default CheckTitle;
