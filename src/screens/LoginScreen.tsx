import {View, Text, Button} from 'react-native';
import {IStackScreenProps} from '../navigation/types';

export function LoginScreen({navigation}: IStackScreenProps<'Login'>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="teste" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
