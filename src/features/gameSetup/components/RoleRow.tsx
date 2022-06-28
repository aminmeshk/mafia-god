import { useGameRolesStore, usePlayersStore } from '@hooks';
import { Role } from '@models';
import { Circle, HStack, Text, VStack } from 'native-base';
import React, { useCallback } from 'react';
import { Counter } from './Counter';
import { InfoButton } from './InfoButton';

type Props = {
  role: Role;
};

export const RoleRow: React.FC<Props> = ({ role }) => {
  const { id, name, team, slug } = role;
  const { getRoleCount, addRole, removeRole, rolesCount } = useGameRolesStore();
  const { players } = usePlayersStore();

  const count = getRoleCount(slug);
  const moreThanZero = count > 0;
  const playersCount = players.length;

  const increase = useCallback(() => {
    if (rolesCount < playersCount) {
      addRole(role);
    }
  }, [addRole, playersCount, rolesCount, role]);

  const decrease = useCallback(() => {
    if (moreThanZero) {
      removeRole(id);
    }
  }, [removeRole, id, moreThanZero]);

  return (
    <HStack py="2" px="3">
      <Counter count={count} onDecrease={decrease} onIncrease={increase} />
      <VStack flex={1} alignSelf="stretch">
        <HStack>
          <Text
            flex={1}
            fontSize="md"
            textAlign="right"
            alignSelf="center"
            fontWeight={moreThanZero ? 'bold' : 'thin'}
            opacity={moreThanZero ? 1 : 0.6}>
            {name}
          </Text>
          <Circle
            ml="2"
            alignSelf="center"
            size="10px"
            bg={team === 'citizens' ? 'green.600' : 'red.600'}
          />
        </HStack>
        <InfoButton role={role} alignSelf="flex-end" py="1" />
      </VStack>
    </HStack>
  );
};
