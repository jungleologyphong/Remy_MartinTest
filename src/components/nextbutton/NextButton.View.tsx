import {useRef} from 'react';
import {Animated, Easing, Image, TouchableOpacity, View} from 'react-native';
import {getSource} from '~assets';
import {styles} from './NextButton.Styles';

export const NextButton: React.FC = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const handleNextPress = () => {
    fadeOut();

    setTimeout(() => {
      fadeIn();
    }, 500);
  };

  return (
    <View style={styles.imgNext}>
      <Animated.View style={{opacity: fadeAnim}}>
        <TouchableOpacity onPress={handleNextPress}>
          <Image source={getSource('BTNNEXT')} style={styles.imgNext} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};
