import {TouchableOpacity, Text, StyleProp, ViewStyle} from 'react-native';

interface IButtonProps {
  label: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export function Button({label, onPress, style}: IButtonProps) {
  return (
    <TouchableOpacity
      style={[
        {
          backgroundColor: 'red',
          paddingHorizontal: 10,
          paddingVertical: 5,
          borderRadius: 2,
        },
        style,
      ]}
      onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
}
