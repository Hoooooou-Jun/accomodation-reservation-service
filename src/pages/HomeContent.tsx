import React from 'react';
import { ContentBox1, ContentBox2, ContentContainer, ContentText, ContentTitleText, SvgBox, SvgContainer, SvgContainerText, SvgContainerTitleText } from './Home.styled';
import Calendar from '../../public/svg/Calendar.svg'
import { EColor } from '@/styles/color';

function HomeContent() {
  return (
    <ContentContainer>
      <ContentBox1>
        <ContentTitleText>
          당신의 편안하고 아름다운 휴가를 위한 최고의 선택
        </ContentTitleText>
        <ContentText>
          여행은 새로운 경험과 즐거움을 찾는 모험이자 힐링의 시간입니다. 한세 펜션 예약 서비스는 그 동안의 일상에서 벗어나 편안함과 아름다움을 함께 느낄 수 있는 특별한 공간을 제공합니다.
        </ContentText>
      </ContentBox1>
      <ContentBox2>
        <SvgContainer>
          <SvgBox>
            <Calendar fill={EColor.TEXT_200} />
          </SvgBox>
          <SvgContainerTitleText>
            쉽게 방 예약하기
          </SvgContainerTitleText>
          <SvgContainerText>
            웹사이트에서 방에 대한 정보를 확인하고 쉽게 방을 예약할 수 있습니다.
          </SvgContainerText>
        </SvgContainer>
        <SvgContainer>
        <SvgBox>
            <Calendar fill={EColor.TEXT_200} />
          </SvgBox>
          <SvgContainerTitleText>
            쉽게 방 예약하기
          </SvgContainerTitleText>
          <SvgContainerText>
            웹사이트에서 방에 대한 정보를 확인하고 쉽게 방을 예약할 수 있습니다.
          </SvgContainerText>
        </SvgContainer>
        <SvgContainer>
        <SvgBox>
            <Calendar fill={EColor.TEXT_200} />
          </SvgBox>
          <SvgContainerTitleText>
            쉽게 방 예약하기
          </SvgContainerTitleText>
          <SvgContainerText>
            웹사이트에서 방에 대한 정보를 확인하고 쉽게 방을 예약할 수 있습니다.
          </SvgContainerText>
        </SvgContainer>
        <SvgContainer>
        <SvgBox>
            <Calendar fill={EColor.TEXT_200} />
          </SvgBox>
          <SvgContainerTitleText>
            쉽게 방 예약하기
          </SvgContainerTitleText>
          <SvgContainerText>
            웹사이트에서 방에 대한 정보를 확인하고 쉽게 방을 예약할 수 있습니다.
          </SvgContainerText>
        </SvgContainer>
      </ContentBox2>
    </ContentContainer>
  );
};

export default HomeContent;
