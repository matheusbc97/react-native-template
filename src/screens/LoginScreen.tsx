import {SafeAreaView, View, StyleSheet} from 'react-native';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';

import {IStackScreenProps} from '../navigation/types';
import {Button} from '../components';
import {SmartTextInput} from '../components/SmartInput';

const loginFormSchema = z.object({
  email: z.string().email().nonempty('Email é obrigatório'),
  password: z.string().nonempty('Senha é obrigatório'),
});

type ILoginForm = z.infer<typeof loginFormSchema>;

export function LoginScreen({navigation}: IStackScreenProps<'Login'>) {
  const {control, handleSubmit} = useForm<ILoginForm>({
    defaultValues: {
      email: '',
      password: '',
    },
    mode: 'all',
    resolver: zodResolver(loginFormSchema),
  });

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.form}>
        <SmartTextInput control={control} name="email" label="Email" />
        <SmartTextInput control={control} name="password" label="Senha" />
      </View>
      <Button
        label="Logar"
        onPress={handleSubmit(onSubmit)}
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
