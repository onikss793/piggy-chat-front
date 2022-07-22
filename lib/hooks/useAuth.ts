import { LOCAL_STORAGE } from 'lib/utils';
import { isNil } from 'lodash';
import { useEffect, useState } from 'react';

const { ACCESS_TOKEN, REFRESH_TOKEN, ID } = LOCAL_STORAGE;

interface AuthState {
  accessToken: string | null;
  refreshToken: string | null;
  userId: string | null;
}

export default function useAuth() {
  const [auth, setAuth] = useState<AuthState>();

  useEffect(() => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN);
    const refreshToken = localStorage.getItem(REFRESH_TOKEN);
    const id = localStorage.getItem(ID);

    if (isNil(auth) && accessToken && refreshToken && id) {
      setAuth({
        accessToken,
        refreshToken,
        userId: id,
      });
    }
  }, []);

  return { auth, setAuth };
}
