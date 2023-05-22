import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: wp('100%'),
    height: hp('100%'),
    backgroundColor: 'black',
  },
  logo: {
    marginTop: hp('3%'),
  },
  containerMainImg: {
    width: wp('100%'),
    height: hp('100%'),
    alignItems: 'center',
  },
  mainImg: {
    width: wp('100%'),
    height: hp('85%'),
    resizeMode: 'contain',
  },
  coverImg: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgNext: {
    width: wp('5%'),
    height: hp('5%'),
    right: wp('0.5%'),
    resizeMode: 'contain',
    position: 'absolute',
  },
  imgPlay: {
    width: wp('20%'),
    height: hp('20%'),
    position: 'absolute',
    resizeMode: 'contain',
  },
});
