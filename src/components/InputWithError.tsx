import {View, Text} from 'react-native';
import {Input, IInputProps} from './Input';

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
