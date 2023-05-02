import {SafeAreaView, View, StyleSheet} from 'react-native';

import {IStackScreenProps} from '../../navigation/types';
import {Button} from '../../components';
import {SmartTextInput} from '../../components/SmartInput';
import {ILoginForm, useLoginForm} from './hooks/useLoginForm';

export function LoginScreen({navigation}: IStackScreenProps<'Login'>) {
  const onSubmit = (data: ILoginForm) => {
    console.log(data);
    navigation.navigate('Home');
  };

  const {control, submitForm} = useLoginForm({
    onSubmit,
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.form}>
        <SmartTextInput control={control} name="email" label="Email" />
        <SmartTextInput control={control} name="password" label="Senha" />
      </View>
      <Button
        label="Logar"
        onPress={submitForm}
        style={{alignSelf: 'flex-end'}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  form: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 5,
  },
});
