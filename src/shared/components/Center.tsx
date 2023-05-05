import {PropsWithChildren} from 'react';
import {View, StyleSheet, ViewStyle} from 'react-native';

export interface CenterProps {
  containerStyle?: ViewStyle;
}

export const Center = ({
  containerStyle,
  children,
}: PropsWithChildren<CenterProps>) => {
  return <View style={[styles.container, containerStyle]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
});
