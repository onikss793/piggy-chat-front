import dayjs from 'dayjs';
import { last } from 'lodash';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { Layout, MainHeader, Title } from 'components';
import { Routes } from 'lib/utils';
import { Chat } from 'stream-chat-react';
import useChatClient from 'hooks/useChatClient';
import useChatUser from 'hooks/useChatUser';
import { Color } from 'styles/palette';

const Container = styled.div`
  padding: 0 16px;
`;
const RoomContainer = styled.section`
  margin-top: 20px;
`;
const ChatCard = styled.div`
  background-color: ${Color['gray-100']};
  padding: 16px;
  border-radius: 10px;
  cursor: pointer;
  display: flex;
`;
const ChatImg = styled(Image)`
  width: 76px;
  height: 76px;
  border-radius: 10px;
`;
const ChatContent = styled.div`
  margin-left: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const ChatTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
`;
const LastMessage = styled.div`
  margin-top: 16px;
  font-weight: 400;
  font-size: 13px;
`;
const MemberCount = styled.span`
  font-weight: 500;
  margin-left: 8px;
  font-size: 12px;
  color: ${Color['gray-600']};
`;
const MinuteAgo = styled.div`
  font-weight: 500;
  margin-top: 2px;
  font-size: 11px;
  color: ${Color['gray-600']};
`;

const Home: NextPage = () => {
  const router = useRouter();
  const chatClient = useChatClient();
  const { channels, me } = useChatUser({ id: 'Daniel', name: 'Daniel' });

  const goTo = (id: string) => router.push(Routes.CHAT_ROOM(id));
  const getTimeDiff = (date: string) => {
    const lastMessageAt = dayjs(date);
    const now = dayjs();
    const month = now.diff(lastMessageAt, 'month');

    const day = now.diff(lastMessageAt, 'day');
    const hour = now.diff(lastMessageAt, 'hour');
    const min = now.diff(lastMessageAt, 'minute');
    if (day > 29) {

      return `${month}달`;
    }
    if (hour > 24) {
      return `${day}일`;
    }
    if (min > 60) {
      return `${hour}시간`;
    }
    return `${min}분`;
  };

  return (
    <Layout>
      <MainHeader />

      <Container>
        <Title title='채팅 방' styles={{ textAlign: 'left' }} />

        <RoomContainer>
          {chatClient ? <Chat client={chatClient}>
            {channels?.length ? channels.map(channel => (
              <ChatCard onClick={() => channel?.id && goTo(channel?.id)} key={channel.id}>
                <ChatImg
                  src={channel.data?.image as string}
                  layout='fixed'
                  objectFit='cover'
                  width='76px'
                  height='76px'
                />

                <ChatContent>
                  <ChatTitle>
                    {channel.data?.name}
                    <MemberCount>
                      {channel.data?.member_count as number}명 참여
                    </MemberCount>
                  </ChatTitle>

                  <LastMessage>{last(channel.state.messages)?.text}</LastMessage>

                  <MinuteAgo>{getTimeDiff(channel.data?.last_message_at as string)} 전</MinuteAgo>
                </ChatContent>
              </ChatCard>
            )) : null}
          </Chat> : null}
        </RoomContainer>
      </Container>
    </Layout>
  );
};

export default Home;
