import { atom } from 'recoil';
import type { Auth, Channel } from './interface';
import { KEY } from './key';

export const ChannelListState = atom<Channel[]>({
  key: KEY.CHANNEL_LIST,
  default: [],
});

export const AuthState = atom<Auth>({
  key: KEY.AUTH,
});
