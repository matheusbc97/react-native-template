import React from 'react';
import {View, Button, StyleSheet, Text} from 'react-native';

interface Props {
  onTryAgainPress?: (() => void) | undefined | null;
}

export const ErrorMessage = ({onTryAgainPress}: Props) => {
  return (
    <View style={styles.container}>
      <Text>Ocorreu um erro inesperado</Text>
      <Button
        onPress={onTryAgainPress ?? (() => {})}
        title={'Tentar novamente'}
        color={'red'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 10,
  },
  icon: {
    padding: 15,
    fontSize: 70,
    color: '#666',
  },
});
