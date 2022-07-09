import { StreamChat } from 'stream-chat';

const useChatClient = ({ userId, username }: { userId: string, username: string }) => {
  const apiKey = String(process.env.GET_STREAM_API_KEY);
  const client = new StreamChat(String(process.env.GET_STREAM_API_KEY));

  return client;
};

export default useChatClient;
