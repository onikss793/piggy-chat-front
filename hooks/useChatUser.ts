import { useEffect, useState } from 'react';
import { Channel } from 'stream-chat';
import useChatClient from './useChatClient';

interface Props {
  id: string;
  name: string;
}

interface ChatUser {
  cid: string;
  connection_id: string;
  created_at: string;
  me: Me;
  type: string;
}

type Me = {
  banned: boolean;
  channel_mutes: string[];
  created_at: string;
  devices: []
  id: string;
  invisible: boolean;
  language: string;
  last_active: string;
  mutes: []
  name: string;
  online: boolean;
  role: string;
  total_unread_count: number;
  unread_channels: number;
  unread_count: number;
  updated_at: string;
  username: string;
}

export default function useChatUser({ id, name }: Props) {
  const client = useChatClient();
  const [channels, setChannels] = useState<Channel[]>();
  const [me, setMe] = useState<Me>();

  const connect = async () => {
    if (!client) return;

    const user = await client.connectUser(
      { id, name },
      client.devToken(id),
    ) as unknown as ChatUser;
    setMe(user.me);

    const channels = await client.queryChannels({
      type: 'team',
      members: { $in: [id] },
    });
    setChannels(channels);
  };

  useEffect(() => {
    void connect();
  }, [client]);

  return { channels, me };
}
