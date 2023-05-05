import {View} from 'react-native';
import {Input, IInputProps} from './Input';

import {Text} from '../Text';

export interface IInputWithErrorProps extends IInputProps {
  errorMessage?: string;
}

export function InputWithError({
  errorMessage,
  ...inputProps
}: IInputWithErrorProps) {
  return (
    <View>
      <Input {...inputProps} />
      {errorMessage && <Text>{errorMessage}</Text>}
    </View>
  );
}
