import React from 'react';
import * as screens from './screens';
import { Stack } from '@navigation';

const cardDealingNavigation = () => (
  <>
    <Stack.Screen
      name="SelectPlayerToDeal"
      component={screens.SelectPlayerToDealScreen}
      options={{
        title: 'بازیکن بعدی',
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="ShowCard"
      component={screens.ShowCardScreen}
      options={{
        title: 'کارت',
        headerShown: false,
        gestureEnabled: false,
        presentation: 'fullScreenModal',
      }}
    />
  </>
);

export default cardDealingNavigation;
