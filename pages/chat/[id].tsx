import { useEffect, useState } from 'react';
import { StreamChat, Channel as ChannelType } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from 'stream-chat-react';
import '@stream-io/stream-chat-css/dist/css/index.css';

interface Props {
  [key: string]: string;
}

const user = {
  id: 'Daniel',
  name: 'Daniel',
};

const ChatRoom = ({ ...props }: Props) => {
  const [client, setClient] = useState<StreamChat>();
  const [channel, setChannel] = useState<ChannelType>();

  useEffect(() => {
    const newClient = new StreamChat(String(process.env.GET_STREAM_API_KEY));

    const handleConnectionChange = ({ online = false }) => {
      if (!online) return console.log('connection lost');
      setClient(newClient);
    };

    newClient.on('connection.changed', handleConnectionChange);
    newClient.connectUser(user, newClient.devToken(user.id)).catch(e => console.error(e));

    const newChannel = newClient.channel('messaging', 'jushik');
    setChannel(newChannel);

    return () => {
      newClient.off('connection.changed', handleConnectionChange);
      newClient.disconnectUser().then(() => console.log('connection closed'));
    };
  }, []);

  if (!client) return null;

  return (
    <Chat client={client}>
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageList />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default ChatRoom;
