import { useRouter } from 'next/router';
import { FormEvent } from 'react';
import { useForm } from 'react-hook-form';
import {
  Chat,
  Channel,
  MessageInput,
  Thread,
  Window,
  useChannelStateContext,
} from 'stream-chat-react';
import { PlainHeader, Title } from 'components';
import useAuth from 'lib/hooks/useAuth';
import useChatClient from 'hooks/useChatClient';
import useChatUser from 'hooks/useChatUser';
import styled from 'styled-components';
import Messages from '../../components/chat/messages';
import { Color } from '../../styles/palette';
import { PlusIcon } from '../../styles/svgs';

const Container = styled.section`
  position: relative;
`;
const FixedHeader = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1000;
`;
const InputContainer = styled.form`
  background: #FFFFFF;
  height: 50px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 15px;
`;
const Input = styled.input`
  font-weight: 400;
  font-size: 14px;
  color: ${Color['gray-900']};
  padding: 15px;
  width: 100%;

  &::placeholder {
    color: ${Color['gray-500']};
  }
`;
type MessageForm = {
  text: string;
}
const ChatRoom = () => {
  const { register, handleSubmit, reset } = useForm<MessageForm>({});
  const router = useRouter();
  const client = useChatClient();
  const { auth } = useAuth();
  const { channels } = useChatUser({ id: 'Daniel', name: 'Daniel' });
  const channel = channels?.find(channel => channel.id === router.query.id);

  const onValid = async (messageForm: MessageForm) => {
    const message = await channel?.sendMessage({
      text: messageForm.text,
    });
    reset();
  };

  if (!client) return null;

  return (
    <Container>
      <FixedHeader>
        <PlainHeader button='BACK' titleAlign='LEFT'>
          <Title title={channel?.data?.name ?? ''} />
        </PlainHeader>
      </FixedHeader>

      <Chat client={client}>
        <Channel channel={channel}>
          <Messages />
        </Channel>
      </Chat>

      <InputContainer onSubmit={handleSubmit(onValid)}>
        <PlusIcon />
        <Input
          {...register('text', { minLength: 1, required: true })}
          placeholder='채팅 글을 입력해주세요' type='text'
        />
      </InputContainer>
    </Container>
  );
};

export default ChatRoom;
