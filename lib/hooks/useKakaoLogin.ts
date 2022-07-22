import axios from 'axios';
import { useMutation } from 'react-query';
import { useRecoilState } from 'recoil';
import { AuthState } from 'store';
import { axiosInstance, Endpoints, LOCAL_STORAGE, URLS } from '../utils';

interface KakaoAuthResponse {
  id: string;
  accessToken: string;
  refreshToken: string;
  isSignedUpUser: boolean;
}

const formUrlEncoded = (x: Record<string, string>) => Object.keys(x).reduce((p, c) => p + `&${c}=${encodeURIComponent(x[c])}`, '');
const { REDIRECT_URI } = URLS;
const { ACCESS_TOKEN, REFRESH_TOKEN, ID } = LOCAL_STORAGE;

export default function useKakaoLogin() {
  const [_, setAuthState] = useRecoilState(AuthState);
  const kakaoLogin = async ({ code }: { code: string }): Promise<KakaoAuthResponse> => {
    const headers = { 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8' };
    const { data: { access_token: accessToken } } = await axios.post(URLS.KAKAO_OAUTH_TOKEN,
      formUrlEncoded({
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY as string,
        redirect_uri: REDIRECT_URI,
        code,
      }),
      { headers },
    );

    const { data } = await axiosInstance.post(Endpoints.AUTH_KAKAO, { accessToken });
    return data;
  };

  const setItemsToLocalStorage = ({ accessToken, refreshToken, id }: KakaoAuthResponse) => {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    localStorage.setItem(REFRESH_TOKEN, refreshToken);
    localStorage.setItem(ID, id);
  };
  const setItemsToAuth = ({ accessToken, refreshToken, id }: KakaoAuthResponse) => {
    setAuthState({
      id,
      accessToken,
      refreshToken,
    });
  };

  const mutation = useMutation<KakaoAuthResponse, unknown, { code: string }>(kakaoLogin, {
    onSuccess(data) {
      setItemsToAuth(data);
      setItemsToLocalStorage(data);
    },
  });

  return { ...mutation };
}
