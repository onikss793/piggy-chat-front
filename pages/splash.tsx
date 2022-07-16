import styled from 'styled-components';
import LogoImg from 'public/assets/Logo.png';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FFB711;
  width: 100vw;
  height: 100vh;
`;
const Logo = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 83px;
  height: 79px;
`;

const Splash = () => {
  return (
    <Container>
      <Logo image={LogoImg} />
    </Container>
  );
};

export default Splash;
