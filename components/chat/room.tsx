import { SendBirdProvider } from '@sendbird/uikit-react';
import { ChannelProvider } from '@sendbird/uikit-react/Channel/context';
import ChannelUI from '@sendbird/uikit-react/Channel/components/ChannelUI';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { ChannelListState } from 'store';
import MyHeader from './header';

import 'sendbird-uikit/dist/index.css';

const userInfo = {
  id: 'Daniel',
  name: 'Daniel',
};

const Room = () => {
  // const router = useRouter();
  // const [channelList] = useRecoilState(ChannelListState);
  // const [channel, setChannel] = useState<Channel>();
  //
  // useEffect(() => {
  //   const chatRoomId = Number(router.query.id);
  //   const foundChannel = channelList.find(it => it.id === chatRoomId);
  //   setChannel(foundChannel);
  // }, [channelList, router.query.id]);
  //
  // return (
  //   <SendBirdProvider appId={String(process.env.SENDBIRD_APP_ID)} userId={userInfo.id} nickname={userInfo.name}>
  //     <ChannelProvider channelUrl={String(channel?.url)}>
  //       <ChannelUI
  //         renderChannelHeader={() => <MyHeader />}
  //         // renderMessageInput={() => <MyInput />}
  //       />
  //     </ChannelProvider>
  //   </SendBirdProvider>
  // );
};

export default Room;
