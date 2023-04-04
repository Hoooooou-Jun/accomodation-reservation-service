import React from 'react';
import styled from 'styled-components';
import Button from '@/components/Button';

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
    </main>
  );
};

export default Home;
