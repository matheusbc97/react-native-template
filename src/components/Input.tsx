import {View, TextInput, Animated} from 'react-native';

export interface IInputProps {
  label: string;
}

export function Input({label}: IInputProps) {
  const animation = new Animated.Value(0);

  const labelMarginTop = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [15, 0],
  });

  const fontSize = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [14, 12],
  });

  const animateOnFocus = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animateOnBlur = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{borderBottomWidth: 1, paddingTop: 10, marginVertical: 5}}>
      <Animated.Text
        style={{position: 'absolute', top: labelMarginTop, fontSize}}>
        {label}
      </Animated.Text>
      <TextInput
        style={{paddingVertical: 5}}
        onFocus={animateOnFocus}
        onBlur={animateOnBlur}
      />
    </View>
  );
}
