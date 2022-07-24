import { atom } from 'recoil';
import type { Auth } from './interface';
import { KEY } from './key';

const AuthState = atom<Auth>({
  key: KEY.AUTH,
});

export default AuthState;
