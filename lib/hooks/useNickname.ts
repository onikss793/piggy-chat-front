import { axiosInstance, Endpoints } from 'lib/utils';
import { useMutation } from 'react-query';

export interface NicknameValidResponse {
  isUnique: boolean;
}

export default function useNickname() {
  const isNicknameValid = async ({ nickname }: { nickname: string | null }): Promise<NicknameValidResponse | null> => {
    if (!nickname) return null;
    const { data } = await axiosInstance
      .post<NicknameValidResponse>(Endpoints.AUTH_NICKNAME,
        { nickname },
      );
    return data;
  };

  return useMutation(isNicknameValid);
}
