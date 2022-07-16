import { useRouter } from 'next/router';
import type { SyntheticEvent } from 'react';
import styled from 'styled-components';
import { PlainHeader, Layout, Title } from 'components';
import { Color } from 'styles/palette';
import SignupImg from 'public/assets/auth/Signup.png';
import AppleLoginImg from 'public/assets/auth/AppleLogin.png';
import KakaoLoginImg from 'public/assets/auth/KakaoLogin.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-top: 54px;
  margin-top: 90px
`;
const BackgroundImg = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 128px;
  width: 335px;
  border: 1px dashed gray;
`;
const Text = styled.div`
  font-size: 14px;
  text-align: center;
  color: ${Color['gray']};
  margin-top: 10px;
`;
const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;;
  margin-top: 150px;
  margin-bottom: 30px;
`;
const LoginBtn = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 327px;
  height: 54px;
  cursor: pointer;

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Signup = () => {
  const router = useRouter();

  const login = (e: SyntheticEvent) => {
    e.preventDefault();
    void router.push('/auth/profile');
  };

  return (
    <Layout>
      <PlainHeader button='CANCEL'>
        <Title title={'회원가입'} />
      </PlainHeader>

      <Container>
        <BackgroundImg image={SignupImg} />
        <Text>
          회원가입 후 채팅을 통해<br />
          부를 향한 정보를 축적하세요!
        </Text>

        <BtnContainer>
          <LoginBtn onClick={login} image={AppleLoginImg} />
          <LoginBtn onClick={login} image={KakaoLoginImg} />
        </BtnContainer>
      </Container>
    </Layout>
  );
};

export default Signup;
