import {useLayoutEffect, useRef} from 'react';
import {View, TextInput, Animated, TextInputProps} from 'react-native';

export interface IInputProps extends TextInputProps {
  label: string;
}

export function Input({
  label,
  onFocus,
  onBlur,
  onChangeText,
  defaultValue,
  value: valueProp,
  ...props
}: IInputProps) {
  const animation = useRef(new Animated.Value(0));
  const value = useRef((defaultValue || valueProp) ?? '');

  const labelMarginTop = useRef(
    animation.current.interpolate({
      inputRange: [0, 1],
      outputRange: [15, 0],
    }),
  ).current;

  const fontSize = useRef(
    animation.current.interpolate({
      inputRange: [0, 1],
      outputRange: [14, 12],
    }),
  ).current;

  const animateLabelToTop = () => {
    Animated.timing(animation.current, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const animateOnBlur = () => {
    if (value.current === '') {
      Animated.timing(animation.current, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  useLayoutEffect(() => {
    if (value.current) {
      animation.current.setValue(1);
    }
  });

  return (
    <View style={{borderBottomWidth: 1, paddingTop: 10, marginVertical: 5}}>
      <Animated.Text
        style={{position: 'absolute', top: labelMarginTop, fontSize}}>
        {label}
      </Animated.Text>
      <TextInput
        style={{paddingVertical: 5}}
        onFocus={e => {
          animateLabelToTop();
          onFocus?.(e);
        }}
        onBlur={e => {
          animateOnBlur();
          onBlur?.(e);
        }}
        onChangeText={text => {
          value.current = text;
          onChangeText?.(text);
        }}
        defaultValue={defaultValue}
        value={valueProp}
        {...props}
      />
    </View>
  );
}
