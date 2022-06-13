import React from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { Box, Button, Center, Container, useColorMode } from 'native-base';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const colorMode = useColorMode();
  return (
    <Center
      flex={1}
      _light={{ bg: 'gray.100' }}
      _dark={{ bg: 'secondary.800' }}>
      <Box>Home</Box>
      <Box>{colorMode.colorMode}</Box>
      <Button onPress={() => colorMode.toggleColorMode()}>Toggle</Button>
    </Center>
  );
};

export default HomeScreen;
