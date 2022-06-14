import React from 'react';
import { RecoilRoot } from 'recoil';
import MyNativeBaseProvider from './MyNativeBaseProvider';
import NavigationProvider from './NavigationProvider';

type Props = {};

const AppProvider: React.FC<Props> = ({ children }) => {
  return (
    <RecoilRoot>
      <MyNativeBaseProvider>
        <NavigationProvider>{children}</NavigationProvider>
      </MyNativeBaseProvider>
    </RecoilRoot>
  );
};

export default AppProvider;
