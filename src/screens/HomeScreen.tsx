import {View, Text, Button} from 'react-native';
import {IStackScreenProps} from '../navigation/types';

export function HomeScreen({navigation}: IStackScreenProps<'Home'>) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="teste" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
