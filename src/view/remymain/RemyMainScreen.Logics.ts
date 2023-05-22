import {useNavigation, ParamListBase} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export const RemyMainScreenLogics = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateRemyMain = () => {
    console.log('Navigating Remy Main Screen');
    navigation.navigate('RemyMainScreen');
  };

  return {navigateRemyMain};
};
