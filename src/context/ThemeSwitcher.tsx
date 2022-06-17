import { IconButton, SunIcon, useColorMode } from 'native-base';
import React from 'react';

type Props = {};

const ThemeSwitcher: React.FC<Props> = () => {
  const colorMode = useColorMode();
  return (
    <IconButton
      onPress={() => colorMode.toggleColorMode()}
      icon={<SunIcon />}
    />
  );
};

export default ThemeSwitcher;
