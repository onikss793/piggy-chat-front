import { isEmpty, isNil, debounce } from 'lodash';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { PlainHeader, Layout, Title } from 'components';
import ProfileImg from 'public/assets/auth/Profile.png';
import RemoveImg from 'public/assets/auth/Remove.png';
import VerifiedImg from 'public/assets/auth/Verified.png';
import { useForm } from 'react-hook-form';
import { Color } from 'styles/palette';
import useNickname from 'lib/hooks/useNickname';
import { Routes } from '../../lib/utils';

const Container = styled.div`
  padding: 0 20px 0 20px;
`;
const Inner = styled.div`
  margin: 0 auto;
  padding-top: 20px;
`;
const ProfileBg = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 82px;
`;
const Form = styled.form`
  margin-top: 20px;
  width: 100%;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  background: ${Color['gray-100']};
  border-radius: 6px;
  padding: 15px 13px;
  font-size: 16px;
  color: ${Color.black};
  margin: 0 auto;

  &::placeholder {
    color: ${Color['gray-400']};
  }
`;
const VerifyBtn = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 20px;
  width: 20px;
  position: absolute;
  right: 40px;
  z-index: 1;
  cursor: pointer;
`;
const Button = styled.button<{ activate: boolean }>`
  width: 100vw;
  height: 54px;
  background-color: ${({ activate }) => activate ? Color['primary-500'] : Color['gray-300']};
  font-size: 16px;
  text-align: center;
  color: ${({ activate }) => activate ? Color['gray-900'] : Color['gray-500']};
  position: fixed;
  bottom: 0;
  left: 0;
`;
const Warning = styled.div`
  font-weight: 500;
  font-size: 12px;
  color: ${Color['red-500']};
  margin-top: 4px;
`;

interface FormType {
  nickname: string | null;
}

const Profile = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
    trigger,
  } = useForm<FormType>();
  const [isValidNickname, setIsValidNickname] = useState(false);
  const nicknameWatching = watch('nickname');
  const { mutate: checkNickname, data } = useNickname();

  const submitNickname = (formData: FormType) => {
    const { nickname } = formData;
    console.log('Send Signup API', nickname);
    void router.replace(Routes.SIGNUP_DONE);
  };

  const debouncedCheckNickname = debounce(async () => {
    await checkNickname({ nickname: nicknameWatching });
    const isValidFromServer = Boolean(data?.isUnique);
    setIsValidNickname((!isEmpty(nicknameWatching) && isEmpty(errors.nickname) && isValidFromServer));
  }, 500);

  useEffect(() => {
    !isEmpty(nicknameWatching) && trigger('nickname');
    debouncedCheckNickname();
  }, [nicknameWatching]);

  useEffect(() => {
    if (data?.isUnique === false) {
      console.error('duplicated nickname');
    }
  }, [data?.isUnique]);

  const showRemoveBtn = !(isNil(nicknameWatching) || isEmpty(nicknameWatching));

  return (
    <Layout>
      <PlainHeader button='BACK'>
        <Title title='프로필' />
      </PlainHeader>

      <Container>
        <Inner>
          <ProfileBg image={ProfileImg} />

          <Form id='profile'>
            <InputWrapper>
              <Input
                placeholder='닉네임을 입력해주세요 (2~12자)'
                {...register('nickname', {
                  maxLength: 12,
                  minLength: 2,
                  required: true,
                })}
              />
              {showRemoveBtn ?
                <VerifyBtn
                  image={isValidNickname ? VerifiedImg : RemoveImg}
                  onClick={() => isValidNickname ? null : reset()}
                /> : null}
            </InputWrapper>
            {errors.nickname ? <Warning>2 ~ 12자 내로 입력해주세요</Warning> : null}
          </Form>
        </Inner>

        <Button activate={isValidNickname} form='profile' onClick={handleSubmit(submitNickname)} type='submit'>
          회원가입
        </Button>
      </Container>
    </Layout>
  );
};

export default Profile;
