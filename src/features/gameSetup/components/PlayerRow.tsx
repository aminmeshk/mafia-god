import { useIconPack } from '@hooks';
import { HStack, Icon, IconButton, Text } from 'native-base';
import React from 'react';

type Props = {
  name: string;
  onDelete: () => void;
};

export const PlayerRow: React.FC<Props> = React.memo(({ name, onDelete }) => {
  const iconPack = useIconPack('MaterialCommunityIcons');
  return (
    <HStack py="2" px="3">
      <IconButton
        variant="ghost"
        icon={<Icon as={iconPack} name="delete" color="primary.600" />}
        onPress={onDelete}
      />
      <Text flex={1} fontSize="md" textAlign="right" alignSelf="center">
        {name}
      </Text>
    </HStack>
  );
});
