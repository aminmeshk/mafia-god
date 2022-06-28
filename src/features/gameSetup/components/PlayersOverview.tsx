import { usePlayersStore } from '@hooks';
import { Box, Flex, Text, VStack } from 'native-base';
import React from 'react';
import { PlayerChip } from './PlayerChip';

type Props = {} & React.ComponentProps<typeof Box>;

export const PlayersOverview: React.FC<Props> = ({ ...props }) => {
  const { players } = usePlayersStore();
  const playersTitle = `${players.length} بازیکن`;

  return (
    <Box bg="secondary.700" _light={{ bg: 'gray.100' }} rounded="lg" {...props}>
      <VStack p="2">
        <Text fontFamily="heading" fontSize="xl" textAlign="right" mx="2">
          {playersTitle}
        </Text>
        <Flex flexWrap="wrap" flexDirection="row-reverse">
          {players.map((p, ind) => (
            <PlayerChip key={ind} name={p.name} m="1" />
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};
