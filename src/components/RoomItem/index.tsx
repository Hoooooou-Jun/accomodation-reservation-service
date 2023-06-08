import React from 'react'
import { Container, RoomContent, RoomPrice, RoomTitle } from './style';
import Image from 'next/image';


function RoomItem({ image, title, content,  }: any) {
  return (
    <Container>
      <Image style={{
        display: 'flex',
        width: '100%',
        height: '100%',
        borderRadius: 20,
        marginBottom: 12,
        }} src={image} alt='roomItem' />
      <RoomTitle>
        이공관 403호
      </RoomTitle>
      <RoomContent>
        이공관 4층에 위치해 있습니다.
      </RoomContent>
      <RoomPrice>
        $ 85,000 / 1박
      </RoomPrice>
    </Container>
  )
}

export default RoomItem;
