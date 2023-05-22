import React from 'react';
import {View, Image} from 'react-native';
import {getSource} from '~assets';
import {styles} from './SplashRemy.Styles';
import {NextButton} from '~components/nextbutton';

export const SplashRemy: React.FC<any> = props => {
  const {} = props;
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
          <NextButton />
          {/* <Image source={getSource('BTNNEXT')} style={styles.imgNext} /> */}
        </View>
      </View>
    </View>
  );
};
