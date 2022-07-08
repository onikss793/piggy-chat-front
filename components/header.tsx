import type { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import CancelImg from '../public/assets/header/Cancel.png';
import LeftChevronImg from '../public/assets/header/LeftChevron.png';

interface Props {
  children: ReactNode;
  button: 'CANCEL' | 'BACK';
}

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`;
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 54px;
  width: 100vw;
  min-width: 375px;

  ${breakpoint('tablet')`
    width: 737px;  
  `}
`;
const Cancel = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;
`;
const LeftChevron = styled.div<{ image: { src: string } }>`
  background-image: url(${props => props.image.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  width: 24px;
  height: 24px;
  cursor: pointer;
  position: absolute;
  top: 15px;
  left: 15px;
`;

const Header = ({ children, button }: Props) => {
  return (
    <Container>
      <Div>
        {button === 'CANCEL' ? <Cancel image={CancelImg} /> : null}
        {button === 'BACK' ? <LeftChevron image={LeftChevronImg} /> : null}
        {children}
      </Div>
    </Container>
  );
};

export default Header;
