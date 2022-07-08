import styled from 'styled-components';
import { Header, Layout, Title } from '../../components';
import { HEADER_HEIGHT } from '../../styles/constants';
import ProfileImg from '../../public/assets/auth/Profile.png';

const Container = styled.div`
  padding-top: ${HEADER_HEIGHT}px;
`;
const Inner = styled.div`
  width: fit-content;
  margin: 0 auto;
  padding-top: 20px;
`;
const ProfileBg = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 82px;
  height: 82px;
`;

const Profile = () => {
  return (
    <Layout>
      <Header button='BACK'>
        <Title title='프로필' />
      </Header>

      <Container>
        <Inner>
          <ProfileBg image={ProfileImg} />
        </Inner>
      </Container>
    </Layout>
  );
};

export default Profile;
