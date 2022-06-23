import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { homeNavigation } from '@features/home';
import { ThemeSwitcher } from '@context';
import { gameSetupNavigation } from '@features/gameSetup';
import { Platform } from 'react-native';

export const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <ThemeSwitcher />,
        animation: Platform.select({
          ios: 'default',
          android: 'fade_from_bottom',
        }),
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'MafiaNights-Bold',
        },
      }}>
      {homeNavigation()}
      {gameSetupNavigation()}
    </Stack.Navigator>
  );
};
