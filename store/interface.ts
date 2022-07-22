export interface Channel {
  url: string;
  id: number;
  name: string;
}

export interface Auth {
  id: string;
  accessToken: string;
  refreshToken: string;
}
