import styled from 'styled-components';
import { Header, Layout, Title } from '../../components';
import { Color } from '../../styles/palette';
import SignupImg from '../../public/assets/auth/Signup.png';
import AppleLoginImg from '../../public/assets/auth/AppleLogin.png';
import KakaoLoginImg from '../../public/assets/auth/KakaoLogin.png';

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  padding-top: 54px;
  height: 667px;
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
  color: ${Color.gray};
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

  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Signup = () => {
  return (
    <Layout>
      <Header button='CANCEL'>
        <Title title={'회원가입'} />
      </Header>

      <Container>
        <BackgroundImg image={SignupImg} />
        <Text>
          회원가입 후 채팅을 통해<br />
          부를 향한 정보를 축적하세요!
        </Text>

        <BtnContainer>
          <LoginBtn image={AppleLoginImg} />
          <LoginBtn image={KakaoLoginImg} />
        </BtnContainer>
      </Container>
    </Layout>
  );
};

export default Signup;
