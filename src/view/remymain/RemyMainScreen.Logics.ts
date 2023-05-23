import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const RemyMainScreenLogics = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateRemyMain = () => {
    navigation.navigate('RemyMainScreen');
  };

  return {navigateRemyMain};
};
