import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';
import IconButton from '@/components/IconButton';
import NextButton from '@/components/NextButton';
import Bed from '../../public/svg/Bed.svg'
import Next from '../../public/svg/Next.svg'
import Setting from '../../public/svg/Setting.svg';

const Title = styled.div`
  text-align: center;
  font-family: 'NotoSansKR-Bold';
`;

function Home() {
  const handleButton = () => {
    console.log('asdfasdf');
  }
  return (
    <main>
      <div style={{ fontFamily: 'NotoSansKR-Black' }}>asdfasd</div>
      <Title>asdfa</Title>
      <Button type='primary' label='Booking' onClick={handleButton}/>
      <IconButton type='secondary' label='iconButton' svg={<Setting />} onClick={handleButton} />
      <NextButton type='secondary' svg={<Next />} onClick={handleButton} />
      <Bed />
    </main>
  );
};

export default Home;
