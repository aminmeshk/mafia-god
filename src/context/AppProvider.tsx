import React from 'react';
import { theme } from '@constants';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

type Props = {};

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>
    </NavigationContainer>
  );
};

export default AppProvider;
