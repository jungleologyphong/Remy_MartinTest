import React from 'react';
import {View, Image} from 'react-native';
import {getSource} from '~assets';
import {styles} from './RemyMainScreen.Styles';
import {RemyMainScreenLogics} from './RemyMainScreen.Logics';
import {HeaderRemy} from '~src/submodule/HeaderRemy';

import {Text} from 'react-native-animatable';

export const RemyMainScreen: React.FC<any> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <View style={styles.coverHeader}>
        <HeaderRemy
          sourceImg={getSource('LOGOAPP')}
          itemFirstMenu={'HERITAGE'}
          itemOthersMenu={'CALENDAR'}
          itemOthersMenu2={'KEY FOCUS'}
          itemOthersMenu3={'LIMITED EDITIONS'}
          itemOthersMenu4={'ACTIVATIONS'}
          itemOthersMenu5={'PERMANENT VISIBILITY'}
          itemOthersMenu6={'SUSTAINABILITY'}
          itemOthersMenu7={'RANGE'}
        />
      </View>
      <View style={styles.coverMainImg}>
        <Image source={getSource('BACKGROUNDSCREEN2')} style={styles.mainImg} />
      </View>
      <View style={styles.coverRemyXO}>
        <Image source={getSource('REMYXO')} style={styles.remyXO} />
        <Text style={styles.txtContent}>
          Behind every individual success{'\n'} is a collective story.
        </Text>
      </View>
    </View>
  );
};
