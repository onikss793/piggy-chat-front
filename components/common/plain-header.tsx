import { useRouter } from 'next/router';
import type { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';
import CancelImg from 'public/assets/header/Cancel.png';
import LeftChevronImg from 'public/assets/header/LeftChevron.png';

interface Props {
  children?: ReactNode;
  button?: 'CANCEL' | 'BACK';
  titleAlign?: 'CENTER' | 'LEFT';
}

const getTitleAlign = (titleAlign: 'CENTER' | 'LEFT') => {
  switch (titleAlign) {
    case 'CENTER':
      return 'center';
    case 'LEFT':
      return 'flex-start';
  }
};

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
`;
const Div = styled.div<{ titleAlign: 'CENTER' | 'LEFT' }>`
  display: flex;
  justify-content: ${({ titleAlign }) => getTitleAlign(titleAlign)};
  padding-left: ${({ titleAlign }) => titleAlign === 'LEFT' ? '50px' : 0};
  align-items: center;
  position: relative;
  height: 54px;
  width: 100vw;
  min-width: 375px;
  background-color: white;

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

const PlainHeader = ({ children, button, titleAlign = 'CENTER' }: Props) => {
  const router = useRouter();

  const goBack = () => {
    router.back();
  };

  return (
    <Container>
      <Div titleAlign={titleAlign}>
        {button === 'CANCEL' ? <Cancel image={CancelImg} /> : null}
        {button === 'BACK' ? <LeftChevron onClick={goBack} image={LeftChevronImg} /> : null}
        {children}
      </Div>
    </Container>
  );
};

export default PlainHeader;
