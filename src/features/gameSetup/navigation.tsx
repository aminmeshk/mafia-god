import React from 'react';
import * as screens from './screens';
import { Stack } from '@navigation';

const gameSetupNavigation = () => (
  <>
    <Stack.Screen
      name="SetupPlayers"
      component={screens.SetupPlayersScreen}
      options={{
        title: 'بازیکن ها',
      }}
    />
    <Stack.Screen
      name="SetupRoles"
      component={screens.SetupRolesScreen}
      options={{
        title: 'نقش ها',
      }}
    />
  </>
);

export default gameSetupNavigation;
