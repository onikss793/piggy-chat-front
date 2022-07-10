import dynamic from 'next/dynamic';
import styled from 'styled-components';

interface Props {
  [key: string]: string;
}

const Container = styled.section`
  height: 100vh;
`;

const DynamicChatRoomWithNoSSR = dynamic(() => import('../../components/chat'), {
  ssr: false,
  loading: () => <p>...</p>,
});

const Chatroom = () => (
  <Container>
    <DynamicChatRoomWithNoSSR />
  </Container>
);

export default Chatroom;
