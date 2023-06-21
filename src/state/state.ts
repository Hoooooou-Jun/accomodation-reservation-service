import { atom } from 'recoil';

const roomData = atom({
  key: 'roomData',
  default: ''
});

export { roomData };