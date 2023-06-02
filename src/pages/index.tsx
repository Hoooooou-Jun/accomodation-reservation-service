import Header from '@/components/Header';
import React from 'react';
import HomeTitle from './HomeTitle';
import HomeContent from './HomeContent';

function Home() {
  const handleButton = () => {
    console.log('asdfasdf');
  }
  return (
    <main>
      <Header />
      <HomeTitle />
      <HomeTitle />
      <HomeTitle />
      <HomeContent />
    </main>
  );
};

export default Home;
