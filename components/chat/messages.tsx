import dayjs from 'dayjs';
import Image from 'next/image';
import { useChannelStateContext } from 'stream-chat-react';
import styled from 'styled-components';
import useChatUser from 'hooks/useChatUser';
import { Color } from 'styles/palette';
import ProfileImg from 'public/assets/chat/profile.png';

type User = {
  banned: boolean;
  created_at: string;
  id: string;
  last_active: string;
  name: string;
  online: boolean;
  role: string;
  updated_at: string;
  username: string;
}
type Message = {
  cid: string;
  html: string;
  id: string;
  latest_reactions: unknown[];
  mentioned_users: unknown[];
  own_reactions: unknown[];
  reply_count: number;
  text: string;
  user: User;
}

const Container = styled.section`
  width: 100%;
  padding: 0 16px;
`;
const MessageContainer = styled.div<{ reversed: boolean }>`
  display: flex;
  justify-content: ${props => props.reversed ? 'flex-end' : 'flex-start'};
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;
const Right = styled.div`
  margin-left: 10px;
`;
const Username = styled.div`
  font-weight: 500;
  font-size: 13px;
  margin-bottom: 2px;
`;
const Timestamp = styled.span`
  font-weight: 500;
  font-size: 11px;
  color: ${Color['gray-600']};
  margin-left: 6px;
`;
const Content = styled.div`
  font-weight: 400;
  font-size: 13px;
`;

export default function Messages() {
  const { messages } = useChannelStateContext();
  const { me } = useChatUser({ id: 'Daniel', name: 'Daniel' });

  console.log(messages?.length && messages[0]);

  return (
    <Container>
      {messages?.map(message => (
        <MessageContainer key={message.id} reversed={message.user?.id === me?.id}>
          <Image src={ProfileImg} layout='fixed' width='40px' height='40px' />

          <Right>
            <Username>
              {message.user?.name}
              <Timestamp>{dayjs(message.created_at).format('HH:mm')}</Timestamp>
            </Username>
            <Content>{message.text}</Content>
          </Right>
        </MessageContainer>
      ))}
    </Container>
  );
}
