import {Button, SafeAreaView, View} from 'react-native';

import {IStackScreenProps} from '../navigation/types';
import {Input} from '../components';

export function LoginScreen({navigation}: IStackScreenProps<'Login'>) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, marginHorizontal: 20, marginVertical: 5}}>
        <Input label="Login" />
        <Input label="Senha" />
      </View>
      <Button title="Logar" onPress={() => navigation.navigate('Home')} />
    </SafeAreaView>
  );
}
