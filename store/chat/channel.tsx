import { atom } from 'recoil';
import { KEY } from '../key';
import type { Channel } from './interface';

export const ChannelListState = atom<Channel[]>({
  key: KEY.CHANNEL_LIST,
  default: [],
});
