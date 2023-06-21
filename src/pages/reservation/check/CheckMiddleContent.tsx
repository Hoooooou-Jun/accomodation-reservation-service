import React, { useState } from 'react';
import { MiddleContentContainer, RoomTextAlignView } from './Check.styled';
import { Button } from '@mui/material';
import { requestReservation, requestReservationInfo } from '@/utils/request';
import Router from 'next/router';

function CheckMiddleContent() {
  const [check, set_check] = useState<any>();
  const handleReservationCheck = () => {
    requestReservationInfo("1").then((res) => {
      alert("예약 조회에 성공하였습니다.");
      set_check(res.data);
      console.log(res);
    }).catch((err) => {
      alert("조회된 결과가 없습니다.");
      console.log(err);
    })
  }

  return (
    <MiddleContentContainer>
      <Button onClick={handleReservationCheck} style={{ width: '90%' }} variant="contained">에약조회</Button>
      {
        check &&
          <div>
            {Object.values(check).map((item: any) => (
              <RoomTextAlignView key={item.id}>
                <div>예약자: {item.member_id}</div>
                <div>체크인: {item.start_date}</div>
                <div>체크아웃: {item.end_date}</div>
              </RoomTextAlignView>
            ))}
          </div>
      }

    </MiddleContentContainer>
  );
};

export default CheckMiddleContent;
