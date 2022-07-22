import { atom } from 'recoil';
import { KEY } from '../key';
import type { Auth } from '../interface';

export const AuthState = atom<Auth>({
  key: KEY.AUTH,
});
