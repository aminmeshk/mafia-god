import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { homeNavigation } from '@features/home';

export const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStack = () => (
  <Stack.Navigator>{homeNavigation()}</Stack.Navigator>
);
