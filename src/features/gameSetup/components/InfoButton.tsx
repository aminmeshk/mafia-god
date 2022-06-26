import { InfoModal } from '@components';
import { useIconPack } from '@hooks';
import { Role } from '@models';
import { Button, Icon, useDisclose } from 'native-base';
import React from 'react';

type Props = {
  role: Role;
} & React.ComponentProps<typeof Button>;

export const InfoButton: React.FC<Props> = ({ role, ...props }) => {
  const iconPack = useIconPack('Ionicons');
  const { isOpen, onClose, onOpen } = useDisclose();
  return (
    <>
      <Button
        {...props}
        variant="ghost"
        rightIcon={
          <Icon as={iconPack} name="information-circle-outline" size="xs" />
        }
        onPress={onOpen}
        _text={{
          fontSize: 'xs',
        }}>
        توضیحات...
      </Button>
      <InfoModal role={role} isOpen={isOpen} onClose={onClose} />
    </>
  );
};
