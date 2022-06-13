import { extendTheme } from 'native-base';

export const theme = extendTheme({
  colors: {
    primary: {
      50: '#ffe2ec',
      100: '#ffb3c5',
      200: '#fc839f',
      300: '#f95278',
      400: '#f62252',
      500: '#dd0939',
      600: '#ad032c',
      700: '#7c001e',
      800: '#4d0012',
      900: '#200005',
    },
    secondary: {
      50: '#e6f5ff',
      100: '#ccdce5',
      200: '#b0c5cd',
      300: '#93acb7',
      400: '#7794a1',
      500: '#5e7b88',
      600: '#475f6b',
      700: '#31444e',
      800: '#192a30',
      900: '#001115',
    },
  },
  config: {
    initialColorMode: 'dark',
  },
});
