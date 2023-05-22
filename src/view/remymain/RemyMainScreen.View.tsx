import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {getSource} from '~assets';
import {styles} from './RemyMainScreen.Styles';
import {RemyMainScreenLogics} from './RemyMainScreen.Logics';
import {HeaderRemy} from '~src/submodule/HeaderRemy';

export const RemyMainScreen: React.FC<any> = props => {
  const {} = props;

  const {navigateRemyMain} = RemyMainScreenLogics();
  return (
    <View style={styles.container}>
      <HeaderRemy
        sourceImg={getSource('LOGOAPP')}
        itemFirstMenu={'HERITAGE'}
        itemOthersMenu={'CALENDAR'}
        itemOthersMenu2={'CALENDAR'}
        itemOthersMenu3={'LIMITED EDITIONS'}
        itemOthersMenu4={'ACTIVATIONS'}
        itemOthersMenu5={'PERMANENT VISIBILITY'}
        itemOthersMenu6={'SUSTAINABILITY'}
        itemOthersMenu7={'RANGE'}
      />
    </View>
  );
};
