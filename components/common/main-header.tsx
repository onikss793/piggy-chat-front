import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import { Color } from 'styles/palette';
import AlertImg from 'public/assets/header/Alert.png';
import SettingImg from 'public/assets/header/Setting.png';

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
`;
const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px;
  align-items: center;
  position: relative;
  width: 100vw;
  min-width: 375px;
  background-color: white;

  ${breakpoint('tablet')`
    width: 737px;  
  `}
`;
const Title = styled.span`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  color: ${Color.black};
`;
const LeftAlign = styled.div``;
const RightAlign = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 26px;
  align-items: center;
`;
const Icon = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 24px;
  width: 24px;
  cursor: pointer;
`;

const MainHeader = () => {
  return (
    <Container>
      <Inner>
        <LeftAlign>
          <Title>꿀챗</Title>
        </LeftAlign>

        <RightAlign>
          <Icon image={AlertImg} />
          <Icon image={SettingImg} />
        </RightAlign>
      </Inner>
    </Container>
  );
};

export default MainHeader;
