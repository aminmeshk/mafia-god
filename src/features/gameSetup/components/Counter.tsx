import { useIconPack } from '@hooks';
import { Center, HStack, Icon, IconButton, Text } from 'native-base';
import React from 'react';

type Props = {
  count: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

export const Counter: React.FC<Props> = React.memo(
  ({ count, onDecrease, onIncrease }) => {
    const iconPack = useIconPack('MaterialCommunityIcons');

    return (
      <HStack w="33%">
        <IconButton
          variant="ghost"
          icon={
            <Icon as={iconPack} name="minus" size="lg" color="primary.600" />
          }
          onPress={onDecrease}
        />
        <Center
          rounded="md"
          flex={1}
          bg="secondary.900:alpha.60"
          alignSelf="center"
          py="2"
          _light={{
            bg: 'gray.300',
          }}>
          <Text
            fontWeight={count > 0 ? 'bold' : 'thin'}
            opacity={count > 0 ? 1 : 0.7}
            fontSize="md">
            {count}
          </Text>
        </Center>
        <IconButton
          variant="ghost"
          icon={
            <Icon as={iconPack} name="plus" size="lg" color="primary.600" />
          }
          onPress={onIncrease}
        />
      </HStack>
    );
  },
);
