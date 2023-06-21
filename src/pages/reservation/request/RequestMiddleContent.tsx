import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { EColor } from '@/styles/color';
import { ContentBox1, ContentBox2, ContentText, ContentTitleText, DatePickerView, ImageView, MiddleContentContainer, RoomTextAlignView, RoomTextView, SelectedView } from './Request.styled';
import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, Button } from '@mui/material';
import room1 from '../../../../public/assets/room_104.jpg';
import room2 from '../../../../public/assets/room_203.jpg';
import room3 from '../../../../public/assets/room_304.jpg';
import room4 from '../../../../public/assets/room_403.jpg';
import RoomItem from '@/components/RoomItem';
import { useRecoilState } from 'recoil';
import { roomData } from '@/state/state';
import { requestReservation } from '@/utils/request';
import Router from 'next/router';

function RequestMiddleContent() {
  const [roomDb, set_roomDb] = useRecoilState(roomData);
  const [room, set_room] = useState('');
  const [roomPrice, set_roomPrice] = useState(0);
  const [startDate, set_startDate] = useState<any>(new Date());
  const [endDate, set_endDate] = useState<any>(new Date());

  const handleReservation = () => {
    requestReservation(startDate, endDate, "1", room).then((res) => {
      alert("예약에 성공하였습니다.");
      Router.push('/reservation/check');
    }).catch((err) => {
      alert("예약에 실패하였습니다.");
      console.log(err);
    })
  }

  const handleChange = (event: SelectChangeEvent) => {
    set_room(event.target.value as string);
  };

  const getDateRange = () => {
    let diff = Math.abs(startDate.getTime() - endDate.getTime());
    return Math.ceil(diff / (1000 * 60 * 60 * 24));
  }

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
      <ContentBox1>
        <ContentTitleText style={{marginBottom: '36px'}}>
          예약하기
        </ContentTitleText>
        <RoomTextView>
          {Object.values(roomDb).map((item: any, key: any) => (
            <RoomTextAlignView key={key}>
              <div>{item.id}</div>
              <div>이름: {item.name}</div>
              <div>침대 타입: {item.type}</div>
              <div>가격: {item.price}</div>
              <div>서비스: {item.service}</div>
              <div>어메니티: {item.amenity}</div>
            </RoomTextAlignView>
          ))}
        </RoomTextView>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">방</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={room}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={1}>이공관 104호</MenuItem>
            <MenuItem value={2}>이공관 203호</MenuItem>
            <MenuItem value={3}>이공관 304호</MenuItem>
            <MenuItem value={4}>이공환 403호</MenuItem>
          </Select>
        </FormControl>
        <DatePickerView>
          <ContentText>체크인 날짜</ContentText>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selectsStart
            selected={startDate}
            onChange={date => set_startDate(date)}
            startDate={startDate}
            endDate={endDate}
            minDate={new Date()}
          />
          <ContentText>체크아웃 날짜</ContentText>
          <DatePicker
            dateFormat="yyyy-MM-dd"
            selectsEnd
            selected={endDate}
            onChange={date => set_endDate(date)}
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </DatePickerView>
      </ContentBox1>
      <SelectedView>
        <ContentTitleText style={{marginBottom: 16}}>
          선택한 방: {room}
        </ContentTitleText>
        <ContentTitleText>
          {getDateRange()}박
        </ContentTitleText>
      </SelectedView>
      <Button onClick={handleReservation} style={{ width: '90%' }} variant="contained">에약하기</Button>
    </MiddleContentContainer>
  );
};

export default RequestMiddleContent;
