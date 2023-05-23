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
  },
  containerContent: {
    bottom: hp('10%'),
    right: hp('12%'),
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  coverHeader: {
    height: hp('21%'),
    width: wp('100%'),
  },
  coverMainPage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    width: wp('100%'),
    height: hp('80%'),
  },
  imgHeritage: {
    borderRadius: 5,
    position: 'relative',
    bottom: hp('5%'),
    width: wp('50%'),
    height: hp('50%'),
    resizeMode: 'contain',
  },
  imgHeritage2: {
    elevation: 3,
    borderRadius: 5,
    position: 'relative',
    top: hp('10%'),
    left: hp('2%'),
    width: wp('15%'),
    height: hp('15%'),
    marginBottom: hp('12%'),
    resizeMode: 'contain',
  },
  txtContent: {
    elevation: 3,
    backgroundColor: '#FFFFFF',
    paddingVertical: hp('2%'),
    paddingHorizontal: hp('3.5%'),
  },
});
