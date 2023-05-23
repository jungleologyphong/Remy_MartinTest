import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {CodePushSelector} from '~modules/setting/settingStore';
import {Splash, Auth, SplashRemy, RemyMainScreen, Heritage} from '~view';
import {navigationRef} from '~core/helper/navigate';
import {TokenSelector} from '~modules/authentication';

const Stack = createNativeStackNavigator();
const privateScreen: any[] = [Auth];

const MainRouter = () => {
  const {splash} = useSelector(CodePushSelector);
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!splash ? (
          <Stack.Screen name="SplashScreen" component={Splash} />
        ) : (
          privateScreen.map((res: any) => {
            return (
              <>
                <Stack.Screen
                  name="SplashRemy"
                  component={SplashRemy}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="RemyMainScreen"
                  component={RemyMainScreen}
                  options={{headerShown: false}}
                />
                <Stack.Screen
                  name="HERITAGE"
                  component={Heritage}
                  options={{headerShown: false}}
                />
              </>
            );
          })
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default React.memo(MainRouter);
