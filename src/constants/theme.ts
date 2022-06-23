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
        normal: 'MafiaNights-Bold',
        italic: 'MafiaNights-Bold',
      },
      200: {
        normal: 'MafiaNights-Bold',
        italic: 'MafiaNights-Bold',
      },
      300: {
        normal: 'MafiaNights-Bold',
        italic: 'MafiaNights-Bold',
      },
      400: {
        normal: 'MafiaNights-Bold',
        italic: 'MafiaNights-Bold',
      },
      500: {
        normal: 'MafiaNights-Bold',
      },
      600: {
        normal: 'MafiaNights-Bold',
        italic: 'MafiaNights-Bold',
      },
    },
    IRANSans: {
      100: {
        normal: 'IRANSansMobile-UltraLight',
        italic: 'IRANSansMobile-UltraLight',
      },
      200: {
        normal: 'IRANSansMobile-UltraLight',
        italic: 'IRANSansMobile-UltraLight',
      },
      300: {
        normal: 'IRANSansMobile-Light',
        italic: 'IRANSansMobile-Light',
      },
      400: {
        normal: 'IRANSansMobile',
        italic: 'IRANSansMobile',
      },
      500: {
        normal: 'IRANSansMobile-Medium',
        italic: 'IRANSansMobile-Medium',
      },
      600: {
        normal: 'IRANSansMobile-Medium',
        italic: 'IRANSansMobile-Medium',
      },
      700: {
        normal: 'IRANSansMobile-Bold',
        italic: 'IRANSansMobile-Bold',
      },
      800: {
        normal: 'IRANSansMobile-Black',
        italic: 'IRANSansMobile-Black',
      },
      900: {
        normal: 'IRANSansMobile-Black',
        italic: 'IRANSansMobile-Black',
      },
    },
  },
  fonts: {
    heading: 'Mafia',
    body: 'IRANSans',
    mono: 'IRANSans',
  },
  config: {
    initialColorMode: 'dark',
  },
});
