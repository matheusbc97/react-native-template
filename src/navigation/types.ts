import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type IStackParams = {
  Home: undefined;
  Login: undefined;
};

export type IStackNavigationProp<T extends keyof IStackParams> =
  NativeStackNavigationProp<IStackParams, T>;

export interface IStackScreenProps<T extends keyof IStackParams> {
  navigation: IStackNavigationProp<T>;
  route: RouteProp<IStackParams, T>;
}
