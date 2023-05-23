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
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  coverHeader: {
    height: hp('15.5%'),
  },
  logo: {
    marginTop: hp('3%'),
  },
  coverMainImg: {
    justifyContent: 'center',
    alignItems: 'center',
    height: hp('72%'),
  },
  mainImg: {
    width: wp('100%'),
    height: hp('72%'),
    position: 'absolute',
    resizeMode: 'stretch',
  },
  coverRemyXO: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: wp('100%'),
    height: hp('10%'),
  },
  remyXO: {
    width: wp('30%'),
    height: hp('30%'),
    bottom: hp('2.5%'),
    position: 'absolute',
    resizeMode: 'contain',
  },
  txtContent: {
    textAlign: 'right',
    position: 'absolute',
    right: wp('10%'),
    bottom: hp('2.5%'),
    fontSize: wp('1.5%'),
  },
});
