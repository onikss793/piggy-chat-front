import styled from 'styled-components';
import { Color } from 'styles/palette';
import PlusImg from 'public/assets/chat/plus.png';

const Container = styled.div``;
const Input = styled.input<{ image: { src: string } }>`
  background-color: ${Color.white};
  border-top: 1px solid ${Color['gray-300']};
  border-bottom: 1px solid ${Color['gray-300']};
  width: 100%;
  padding: 15px 50px;
  color: ${Color['gray-900']};
  background-image: url(${props => props.image.src});
  background-position: left;
  background-position-x: 15px;
  background-repeat: no-repeat;
  background-size: 24px 24px;
  font-size: 14px;
  cursor: pointer;

  &::placeholder {
    color: ${Color['gray-500']};
    font-size: 14px;
  }
`;

const MyInput = () => {
  // const channelState = useChannel();

  // console.log(channelState);
  return (
    <Container>
      <Input placeholder='채팅 글을 입력해주세요.'  image={PlusImg}/>
    </Container>
  );
};

export default MyInput;
