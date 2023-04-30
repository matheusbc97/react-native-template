import {View, Text, Button} from 'react-native';

export function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button title="teste" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}