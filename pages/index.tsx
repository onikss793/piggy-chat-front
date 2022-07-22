import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { Layout, MainHeader, Title } from 'components';
import { ChannelListState } from 'store';
import { Color } from 'styles/palette';
import { Routes } from '../lib/utils';

const Container = styled.div`
  padding: 0 16px;
`;
const RoomContainer = styled.section`

`;
const RoomUL = styled.ul`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;
`;
const RoomLi = styled.li`
  background-color: ${Color['gray-100']};
  display: flex;
  padding: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const channelData = [
  { name: '주식방', id: 1, url: 'sendbird_group_channel_80291943_49d70995e6a588bbee0d9b8acd7aebd874016412' },
  { name: '코인방', id: 2, url: 'sendbird_group_channel_80291943_49d70995e6a588bbee0d9b8acd7aebd874016412' },
];

const Home: NextPage = () => {
  const router = useRouter();
  const goTo = (id: number) => router.push(Routes.CHAT_ROOM(id));

  // const [channelList, setChannelList] = useRecoilState(ChannelListState);
  //
  // useEffect(() => {
  //   setChannelList(channelData);
  // });

  return (
    <Layout>
      <MainHeader />

      <Container>
        <RoomContainer>
          <Title title='채팅 방' styles={{ textAlign: 'left' }} />

          {/*<RoomUL>*/}
          {/*  {channelList.map(it => <RoomLi key={it.id} onClick={() => goTo(it.id)}>{it.name}</RoomLi>)}*/}
          {/*</RoomUL>*/}
        </RoomContainer>
      </Container>
    </Layout>
  );
};

export default Home;
