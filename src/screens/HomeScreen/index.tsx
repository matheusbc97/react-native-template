import {View, Text, Button, FlatList, SafeAreaView} from 'react-native';
import {useQuery} from 'react-query';

import {IStackScreenProps} from '../../navigation/types';
import {getPostsService} from '../../shared/services/postsServices';
import {LoadingFallback, ErrorFallback} from '../../shared/components';

export function HomeScreen({navigation}: IStackScreenProps<'Home'>) {
  const {data, isLoading, isError, refetch} = useQuery(
    'posts',
    getPostsService,
  );

  return (
    <SafeAreaView
      style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <LoadingFallback isLoading={isLoading}>
        <ErrorFallback hasError={isError} onTryAgainPress={() => refetch()}>
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
        </ErrorFallback>
      </LoadingFallback>
      <Button title="teste" onPress={() => navigation.navigate('Login')} />
    </SafeAreaView>
  );
}
