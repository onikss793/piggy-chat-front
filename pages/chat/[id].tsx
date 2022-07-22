// import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import styled from 'styled-components';
import Room from 'components/chat/room';

const Container = styled.section`
  height: 100vh;
`;
const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
`;

// const DynamicChatRoomWithNoSSR = dynamic(() => import('components/chat/room'), {
//   ssr: true,
//   loading: () => <p>...</p>,
// });

const Chatroom = () => {
  return (
    <Container>
      <Suspense fallback={<Loading>...loading</Loading>}>
        <Room />
      </Suspense>
      {/*<DynamicChatRoomWithNoSSR />*/}
    </Container>
  );
};

export default Chatroom;
