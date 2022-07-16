import { useChannel } from '@sendbird/uikit-react/Channel/context';
import PlainHeader from '../common/plain-header';
import Title from '../title';

const MyHeader = () => {
  const channelState = useChannel();

  return (
    <PlainHeader titleAlign={'LEFT'} button={'BACK'}>
      {/*// @ts-ignore*/}
      <Title title={channelState.currentGroupChannel.name} />
    </PlainHeader>
  );
};

export default MyHeader;
