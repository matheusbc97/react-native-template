import {View, Text, Button} from 'react-native';

export function LoginScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login Screen</Text>
      <Button title="teste" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
