import { isEmpty } from 'lodash';
import { useEffect, useState } from 'react';
import { StreamChat } from 'stream-chat';

const useChatClient = () => {
  const [client, setClient] = useState<StreamChat>();

  useEffect(() => {
    if (isEmpty(client)) {
      setClient(new StreamChat(String(process.env.GET_STREAM_API_KEY)));
    }
  }, []);

  return client;
};

export default useChatClient;
