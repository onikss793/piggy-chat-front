import { App } from 'sendbird-uikit';
import { SendBirdProvider } from '@sendbird/uikit-react';
import { ChannelProvider, useChannel } from '@sendbird/uikit-react/Channel/context';
import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';

import 'sendbird-uikit/dist/index.css';

const userInfo = {
  id: 'Daniel',
  name: 'Daniel',
};


const Chat = () => {
  const channelState = useChannel();
  console.log(channelState);

  return (
    <SendBirdProvider appId={String(process.env.SENDBIRD_APP_ID)} userId={userInfo.id} nickname={userInfo.name}>
      <ChannelProvider channelUrl={'sendbird_group_channel_80291943_49d70995e6a588bbee0d9b8acd7aebd874016412'}>
        <ChannelUI />
      </ChannelProvider>

      {/*<App*/}
      {/*  appId={String(process.env.SENDBIRD_APP_ID)}*/}
      {/*  userId={userInfo.id}*/}
      {/*  nickname={userInfo.name}*/}
      {/*  theme={'light'}*/}
      {/*  accessToken={undefined}*/}
      {/*/>*/}
    </SendBirdProvider>
  );
};

export default Chat;
