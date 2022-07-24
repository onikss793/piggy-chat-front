import axios from 'axios';

export const URLS = {
  // SERVER_URL: 'https://qauld05911.execute-api.ap-northeast-2.amazonaws.com/development',
  SERVER_URL: 'http://127.0.0.1:80',
  REDIRECT_URI: 'http://localhost:3000/auth/signup',
  KAKAO_HREF: `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY}&redirect_uri=http://localhost:3000/auth/signup&response_type=code`,
  KAKAO_OAUTH_TOKEN: 'https://kauth.kakao.com/oauth/token',
};

export const axiosInstance = axios.create({
  baseURL: URLS.SERVER_URL,
});

export const LOCAL_STORAGE = {
  ACCESS_TOKEN: 'accessToken',
  REFRESH_TOKEN: 'refreshToken',
  ID: 'id',
};

export const Endpoints = {
  AUTH_KAKAO: 'auth/kakao',
  AUTH_NICKNAME: 'auth/nickname',
};

export const Routes = {
  SIGNUP: '/auth/signup',
  PROFILE: '/auth/profile',
  SIGNUP_DONE: '/auth/done',
  MAIN: '/',
  CHAT_ROOM: (id: number | string) => `/chat/${id}`,
};
