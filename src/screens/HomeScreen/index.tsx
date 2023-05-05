import {View, Text, Button, FlatList, SafeAreaView} from 'react-native';
import {IStackScreenProps} from '../../navigation/types';
import {useQuery} from 'react-query';

const postsMock = [
  {
    id: 1,
    title: 'Como melhorar o desempenho do seu site',
    date: '2020-06-15T10:30:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Os desafios da transformação digital nas empresas',
    date: '2020-08-23T14:45:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 3,
    title: 'A importância da inteligência artificial na era digital',
    date: '2021-02-10T09:15:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 4,
    title: 'Como garantir a segurança de dados na nuvem',
    date: '2021-05-18T16:20:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 5,
    title: 'Desafios e oportunidades da indústria 4.0',
    date: '2022-01-07T11:00:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 6,
    title: 'Tecnologias emergentes e tendências para 2022',
    date: '2022-04-22T13:30:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 7,
    title: 'A evolução dos assistentes virtuais e chatbots',
    date: '2022-08-11T10:10:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 8,
    title: 'Como a realidade aumentada está mudando o mercado',
    date: '2022-11-29T15:00:00',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

const fakeQuery = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(postsMock);
    }, 2000);
  });
};

export function HomeScreen({navigation}: IStackScreenProps<'Home'>) {
  const {data, isLoading, isError} = useQuery('posts', fakeQuery);

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <FlatList
        keyExtractor={item => item.id.toString()}
        data={data ?? []}
        renderItem={({item}) => (
          <View style={{marginVertical: 10}}>
            <Text>{item.title}</Text>
            <Text>{item.date}</Text>
            <Text>{item.content}</Text>
          </View>
        )}
      />
      <Button title="teste" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
}
