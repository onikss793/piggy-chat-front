import { atom } from 'recoil';
import type { Channel } from './interface';
import { KEY } from './key';

const ChannelListState = atom<Channel[]>({
  key: KEY.CHANNEL_LIST,
  default: [],
});

export default ChannelListState;
