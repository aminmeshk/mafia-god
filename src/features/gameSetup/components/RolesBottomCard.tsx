import { useGameRolesStore, usePlayersStore } from '@hooks';
import { Box, Button, HStack, Text, VStack } from 'native-base';
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ItemSeparator } from './ItemSeparator';
import { TeamBox } from './TeamBox';

type Props = {};

export const RolesBottomCard: React.FC<Props> = () => {
  const { mafiaCount, citizenCount, rolesCount } = useGameRolesStore();
  const { players } = usePlayersStore();
  const totalText = `${rolesCount} از ${players.length} نقش`;
  const enabled = rolesCount === players.length;
  const insets = useSafeAreaInsets();

  return (
    <Box roundedTop="xl" bg="secondary.900" minH="100px">
      <VStack alignItems="stretch" space="2">
        <HStack justifyContent="center" alignItems="center" space="2" mt="3">
          <HStack flex={1} alignSelf="stretch" alignItems="center">
            <TeamBox
              team="mafia"
              position="absolute"
              right="0"
              textMode="singleName"
            />
          </HStack>
          <Text fontSize="lg">{mafiaCount}</Text>
          <Text fontSize="lg">🆚</Text>
          <Text fontSize="lg">{citizenCount}</Text>
          <HStack flex={1} alignSelf="stretch" alignItems="center">
            <TeamBox
              team="citizens"
              position="absolute"
              left="0"
              textMode="singleName"
            />
          </HStack>
        </HStack>
        <ItemSeparator w="70%" alignSelf="center" />
        <Text textAlign="center">{totalText}</Text>
        <Button
          bg="primary.600"
          roundedBottom="none"
          roundedTop="lg"
          isDisabled={!enabled}
          py="3"
          _ios={{
            pb: insets.bottom,
          }}
          _text={{
            fontSize: 'lg',
          }}
          _pressed={{
            bg: 'primary.600:alpha.80',
          }}>
          ادامه
        </Button>
      </VStack>
    </Box>
  );
};
