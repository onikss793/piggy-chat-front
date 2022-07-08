import type { NextPage } from 'next';
import styled from 'styled-components';
import { Layout } from '../components';

const Container = styled.div`
  text-align: center;
`;

const Home: NextPage = () => {
  return (
    <Layout>
      <Container>
        Hello World
      </Container>
    </Layout>
  );
};

export default Home;
