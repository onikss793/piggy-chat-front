import { useRouter } from 'next/router';
import styled from 'styled-components';
import HandsUpImg from 'public/assets/auth/HandsUp.png';
import { Layout, PlainHeader, Title } from 'components';
import { Color } from 'styles/palette';

const Container = styled.section`
  padding-top: 25vh;
`;
const Inner = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  justify-content: center;
  align-items: center;
`;
const HandsUp = styled.div`
  background-image: url(${HandsUpImg.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 100px;
  width: 100px;
  font-size: 46px;
  text-align: center;
  line-height: 100px;
`;
const Text = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: ${Color['gray-900']}
`;
const Button = styled.button`
  width: 100vw;
  height: 54px;
  background-color: ${Color['primary-500']};
  font-size: 16px;
  text-align: center;
  color: ${Color['gray-900']};
  position: fixed;
  bottom: 0;
  left: 0;
  cursor: pointer;
`;

const Done = () => {
  const router = useRouter();

  const goTo = () => {
    void router.replace('/');
  };

  return (
    <Layout>
      <PlainHeader>
        <Title title={'화원가입 완료'} />
      </PlainHeader>

      <Container>
        <Inner>
          <HandsUp>🙌</HandsUp>
          <Text>
            감자콩님, 가입이 완료되었습니다!<br />
            이제 커뮤니티 활동을 시작해보세요 :)
          </Text>
        </Inner>

        <Button onClick={goTo}>
          회원가입
        </Button>
      </Container>
    </Layout>
  );
};

export default Done;
