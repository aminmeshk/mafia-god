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
      50: '#e6f1ff',
      100: '#ccd9e5',
      200: '#b0c2cd',
      300: '#93aab7',
      400: '#7793a1',
      500: '#5e7b88',
      600: '#475d6b',
      700: '#31414e',
      800: '#192530',
      900: '#000b15',
    },
  },
  fontConfig: {
    Mafia: {
      100: {
        normal: 'mafia-nights',
        italic: 'mafia-nights',
      },
      200: {
        normal: 'mafia-nights',
        italic: 'mafia-nights',
      },
      300: {
        normal: 'mafia-nights',
        italic: 'mafia-nights',
      },
      400: {
        normal: 'mafia-nights',
        italic: 'mafia-nights',
      },
      500: {
        normal: 'mafia-nights',
      },
      600: {
        normal: 'mafia-nights',
        italic: 'mafia-nights',
      },
    },
    Baran: {
      100: {
        normal: 'baran',
        italic: 'baran',
      },
      200: {
        normal: 'baran',
        italic: 'baran',
      },
      300: {
        normal: 'baran',
        italic: 'baran',
      },
      400: {
        normal: 'baran',
        italic: 'baran',
      },
      500: {
        normal: 'baran',
      },
      600: {
        normal: 'baran',
        italic: 'baran',
      },
    },
  },
  fonts: {
    heading: 'Mafia',
    body: 'Baran',
    mono: 'Baran',
  },
  config: {
    initialColorMode: 'dark',
  },
});
