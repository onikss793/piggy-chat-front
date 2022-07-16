import styled from 'styled-components';
import { Color } from 'styles/palette';

interface Props {
  title: string;
  styles?: Record<string, string>;
}

const Text = styled.span`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  color: ${Color.black};
`;

const Title = ({ title, styles }: Props) => {
  return (
    <Text style={{ ...styles, textAlign: 'left' }}>{title}</Text>
  );
};

export default Title;
