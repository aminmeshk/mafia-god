import React, { useCallback, useState } from 'react';
import { HStack, Icon, IconButton } from 'native-base';
import PlayerInput from './PlayerInput';
import { useIconPack } from '@hooks';

type Props = {
  onAdd: (value: string) => void;
};

const PlayerInputContainer: React.FC<Props> = ({ onAdd }) => {
  const iconPack = useIconPack('Ionicons');
  const [value, setValue] = useState('');

  const add = useCallback(() => {
    if (!value || value === '') {
      return;
    }
    onAdd(value);
    setValue('');
  }, [onAdd, value]);

  return (
    <HStack px="2" py="2" space="2">
      <IconButton
        rounded="sm"
        variant="solid"
        bg="primary.600"
        _pressed={{
          bg: 'primary.600:alpha.80',
        }}
        icon={<Icon as={iconPack} name="add" color="white" />}
        onPress={add}
      />
      <PlayerInput value={value} setValue={setValue} onSubmit={add} />
    </HStack>
  );
};

export default PlayerInputContainer;
