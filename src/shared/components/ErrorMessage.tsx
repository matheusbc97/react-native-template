import React from 'react';
import {Button, Text} from 'react-native';
import {Center} from './Center';

interface Props {
  onTryAgainPress?: (() => void) | undefined | null;
}

export const ErrorMessage = ({onTryAgainPress}: Props) => {
  return (
    <Center>
      <Text>Ocorreu um erro inesperado</Text>
      <Button
        onPress={onTryAgainPress ?? (() => {})}
        title={'Tentar novamente'}
        color={'red'}
      />
    </Center>
  );
};
