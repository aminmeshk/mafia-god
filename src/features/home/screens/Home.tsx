import React, { useCallback } from 'react';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { Box, Button, Center, Text, useColorMode, VStack } from 'native-base';
import { useRecoilState, useRecoilValue } from 'recoil';
import { playersListState } from '@store';

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = () => {
  const colorMode = useColorMode();
  const [playersList, setPlayersList] = useRecoilState(playersListState);

  const addPlayer = useCallback(() => {
    setPlayersList(players => [
      ...players,
      { name: `Amin${players.length + 1}` },
    ]);
  }, [setPlayersList]);

  return (
    <Center flex={1}>
      <Box>Home</Box>
      <Box>{colorMode.colorMode}</Box>
      <VStack>
        {playersList.map((p, i) => (
          <Text key={i}>{p.name}</Text>
        ))}
      </VStack>
      <Button onPress={() => colorMode.toggleColorMode()}>Toggle</Button>
      <Button onPress={addPlayer}>Add Player</Button>
    </Center>
  );
};

export default HomeScreen;
