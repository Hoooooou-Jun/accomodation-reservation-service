import React, { useEffect, useState } from 'react'
import Header from '@/components/Header';
import InfoTitle from './RequestTitle';
import { requestRoom } from '@/utils/request';
import { useSetRecoilState } from 'recoil';
import { roomData } from '@/state/state';
import RequestMiddleContent from './RequestMiddleContent';

function Request() {
  return (
    <main>
      <Header />
      <InfoTitle />
      <RequestMiddleContent />
    </main>
  )
}

export default Request;
