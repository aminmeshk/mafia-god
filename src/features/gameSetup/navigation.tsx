import React from 'react';
import * as screens from './screens';
import { Stack } from '@navigation';

const gameSetupNavigation = () => (
  <>
    <Stack.Screen name="SetupPlayers" component={screens.SetupPlayersScreen} />
  </>
);

export default gameSetupNavigation;
