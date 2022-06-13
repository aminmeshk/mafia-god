import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStack } from '@navigation';
import { NativeBaseProvider } from 'native-base';
import { AppProvider } from '@context';

const App = () => {
  return (
    <AppProvider>
      <AppStack />
    </AppProvider>
  );
};

export default App;
