import {ActivityIndicator as RNActivityIndicator} from 'react-native';

interface Props {
  size?: number;
  color?: string;
}

export const ActivityIndicator = ({size = 40, color = '#a1001a'}: Props) => {
  return <RNActivityIndicator color={color} size={size} />;
};
