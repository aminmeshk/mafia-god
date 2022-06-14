import { theme } from '@constants';
import { NativeBaseProvider } from 'native-base';
import React from 'react';

type Props = {};

const MyNativeBaseProvider: React.FC<Props> = ({ children }) => {
  return <NativeBaseProvider theme={theme}>{children}</NativeBaseProvider>;
};

export default MyNativeBaseProvider;
