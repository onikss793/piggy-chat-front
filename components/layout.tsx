import type { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'styled-components-breakpoint';

interface Props {
  children: ReactNode;
}

const Container = styled.div`
  width: 100%;
`;
const Inner = styled.div`
  margin: 0 auto;
  position: relative;
  min-width: 375px;

  ${breakpoint('tablet')`
      width: 736px;
  `}
`;

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Inner>
        {children}
      </Inner>
    </Container>
  );
};

export default Layout;
