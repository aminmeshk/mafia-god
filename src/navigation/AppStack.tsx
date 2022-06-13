import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { homeNavigation } from '../features/home';

export const Stack = createNativeStackNavigator();

export const AppStack = () => (
  <Stack.Navigator>{homeNavigation()}</Stack.Navigator>
);
