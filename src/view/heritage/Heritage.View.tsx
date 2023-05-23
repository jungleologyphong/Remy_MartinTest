import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './Heritage.Styles';
import {HeaderRemy} from '~src/submodule/HeaderRemy';
import {getSource} from '~assets';
import {SubHeaderRemy} from '~src/submodule/SubHeaderRemy';
import {TextBox} from '~src/submodule/TextBox/TextBox.View';

export const Heritage: React.FC<any> = props => {
  const {} = props;

  return (
    <View style={styles.container}>
      <View style={styles.coverHeader}>
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
        <SubHeaderRemy
          submenuProps={[
            'OUR VALUES',
            'OUR HISTORY',
            'COGNAC FINE CHAMPAGNE',
            'SAVOIR FAIRE',
            'CELLAR MASTER',
          ]}
        />
      </View>
      <View style={styles.coverMainPage}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={getSource('IMG_HERITAGE1')}
            style={styles.imgHeritage}
          />
          <View style={styles.containerContent}>
            <Image
              source={getSource('IMG_HERITAGE2')}
              style={styles.imgHeritage2}
            />
            <TextBox
              typeTextBox="MoreContents"
              title={`“BEHIND EVERY SUCCESS THERE${'\n'}IS A COLLECTIVE STORY.”${'\n'}`}
              itemOtherContent={`WE TEAM UP FOR EXCELLENCE`}
              itemFirstContent={`At Rémy Martin, we believe that every accomplishment${'\n'}is shaped through teamwork.${'\n'}${'\n'}We work together as one to instill passion, excellence${'\n'}and savoir-faire, by assembling our ingredients,${'\n'}combining our skills, associating our qualities,${'\n'}connecting our emotions.${'\n'}${'\n'}Behind Rémy Martin is the combination of many talents,${'\n'}from our maîtres de chai, our distillers, and our${'\n'}winemakers. We are part of an authentic family with a${'\n'}collective story.`}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
