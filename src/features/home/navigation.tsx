import React from 'react';
import * as screens from './screens';
import { Stack } from '@navigation';

const homeNavigation = () => (
  <>
    <Stack.Screen name="Home" component={screens.HomeScreen} />
  </>
);

export default homeNavigation;
