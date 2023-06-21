import React from 'react'
import { Container, RoomContent, RoomPrice, RoomTitle } from './style';
import Image from 'next/image';


function RoomItem({ image, title, content, price }: any) {
  return (
    <Container>
      <Image style={{
        display: 'flex',
        width: '100%',
        height: '200px',
        borderRadius: 20,
        marginBottom: 12,
        }} src={image} alt='roomItem' />
      <RoomTitle>
        {title}
      </RoomTitle>
      <RoomContent>
        {content}
      </RoomContent>
      <RoomPrice>
        $ {price} / 1박
      </RoomPrice>
    </Container>
  )
}

export default RoomItem;
