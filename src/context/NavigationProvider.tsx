import React, { useMemo } from 'react';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
  Theme,
} from '@react-navigation/native';
import { ITheme, useColorMode, useTheme } from 'native-base';
import { StatusBar } from 'react-native';

type Props = {};

const createNavigationLightTheme = (nativeBaseTheme: ITheme): Theme => {
  return {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: nativeBaseTheme.colors.gray[200],
      primary: nativeBaseTheme.colors.primary[500],
    },
  };
};

const createNavigationDarkTheme = (nativeBaseTheme: ITheme): Theme => {
  return {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: nativeBaseTheme.colors.primary[500],
      background: nativeBaseTheme.colors.secondary[800],
      card: nativeBaseTheme.colors.secondary[900],
    },
  };
};

const NavigationProvider: React.FC<Props> = ({ children }) => {
  const colorMode = useColorMode();
  const nativeBaseTheme = useTheme();

  const currentTheme = useMemo(
    () =>
      colorMode.colorMode === 'dark'
        ? createNavigationDarkTheme(nativeBaseTheme)
        : createNavigationLightTheme(nativeBaseTheme),
    [colorMode, nativeBaseTheme],
  );

  return (
    <NavigationContainer theme={currentTheme}>
      <StatusBar
        barStyle={
          colorMode.colorMode === 'dark' ? 'light-content' : 'dark-content'
        }
        backgroundColor={currentTheme.colors.card}
      />
      {children}
    </NavigationContainer>
  );
};

export default NavigationProvider;
