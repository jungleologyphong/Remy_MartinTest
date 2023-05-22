import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  imgNext: {
    width: wp('5%'),
    height: hp('5%'),
    right: wp('0.5%'),
    resizeMode: 'contain',
    position: 'absolute',
  },
});
