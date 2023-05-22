import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {getSource} from '~assets';
import {styles} from './SplashRemy.Styles';
import {SplashRemyLogics} from './SplashRemy.Logics';

export const SplashRemy: React.FC<any> = props => {
  const {} = props;
  const {navigateRemyMain} = SplashRemyLogics();
  return (
    <View style={styles.container}>
      <View style={styles.containerMainImg}>
        <Image source={getSource('LOGOAPP')} style={styles.logo} />
        <View style={styles.coverImg}>
          <Image
            source={getSource('BACKGROUNDSCREEN1')}
            style={styles.mainImg}
          />
          <Image source={getSource('BTNPLAY')} style={styles.imgPlay} />
          <TouchableOpacity
            style={styles.imgNext}
            onPress={() => {
              navigateRemyMain();
            }}>
            <Image source={getSource('BTNNEXT')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
