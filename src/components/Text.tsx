import {PropsWithChildren} from 'react';
import {Text as RNText} from 'react-native';

export function Text({children}: PropsWithChildren) {
  return <RNText>{children}</RNText>;
}
