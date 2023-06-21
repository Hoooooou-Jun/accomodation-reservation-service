import Header from '@/components/Header';
import React, { useEffect } from 'react';
import HomeTitle from './HomeTitle';
import HomeContent from './HomeContent';
import HomeMiddleContent from './HomeMiddleContent';
import { requestRoom } from '@/utils/request';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { roomData } from '@/state/state';

function Home() {
  const [roomDb, set_roomDb] = useRecoilState(roomData);
  useEffect(() => {
    requestRoom()
      .then((res) => {
        set_roomDb(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(roomDb);
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
