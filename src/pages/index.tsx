import Header from '@/components/Header';
import React from 'react';
import HomeTitle from './HomeTitle';
import HomeContent from './HomeContent';
import HomeMiddleContent from './HomeMiddleContent';

function Home() {
  const handleButton = () => {
    console.log('asdfasdf');
  }
  return (
    <main>
      <Header />
      <HomeTitle />
      <HomeContent />
      <HomeMiddleContent />
    </main>
  );
};

export default Home;
