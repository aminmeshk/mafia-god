import { useIconPack } from '@hooks';
import { Role } from '@models';
import { Button, Circle, HStack, Icon, Text, VStack } from 'native-base';
import React, { useCallback, useState } from 'react';
import Counter from './Counter';
import InfoButton from './InfoButton';

type Props = {
  role: Role;
};

const RoleRow: React.FC<Props> = ({ role }) => {
  const { name, description, team } = role;

  const [count, setCount] = useState(0);

  const increase = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount(prev => (prev > 0 ? prev - 1 : prev));
  }, []);

  const iconPack = useIconPack('Ionicons');

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
            fontWeight={count > 0 ? 'bold' : 'thin'}
            opacity={count > 0 ? 1 : 0.6}>
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

export default RoleRow;
