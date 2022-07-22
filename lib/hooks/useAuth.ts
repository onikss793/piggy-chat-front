import { isEmpty } from 'lodash';
import { useRecoilState } from 'recoil';
import { AuthState } from 'store';
import { LOCAL_STORAGE } from 'lib/utils';

const { ACCESS_TOKEN, REFRESH_TOKEN, ID } = LOCAL_STORAGE;

export default function useAuth() {
  const [authState, setAuthState] = useRecoilState(AuthState);
  const accessToken = localStorage.getItem(ACCESS_TOKEN);
  const refreshToken = localStorage.getItem(REFRESH_TOKEN);
  const id = localStorage.getItem(ID);

  if (isEmpty(authState) && (accessToken && refreshToken && id)) {
    setAuthState({
      id,
      accessToken,
      refreshToken,
    });
  }

  return authState;
}
