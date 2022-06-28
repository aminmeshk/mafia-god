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
        headerBackTitle: 'خانه',
      }}
    />
    <Stack.Screen
      name="SetupRoles"
      component={screens.SetupRolesScreen}
      options={{
        title: 'نقش ها',
      }}
    />
    <Stack.Screen
      name="SetupOverview"
      component={screens.SetupOverviewScreen}
      options={{
        title: 'بررسی نهایی',
      }}
    />
  </>
);

export default gameSetupNavigation;
