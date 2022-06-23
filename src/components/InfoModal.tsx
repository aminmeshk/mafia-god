import { Role } from '@models';
import { Box, HStack, Modal, Spacer, Text } from 'native-base';
import React from 'react';

type Props = {
  role: Role;
  isOpen: boolean;
  onOpen?: () => void;
  onClose: () => void;
} & React.ComponentProps<typeof Modal>;

const InfoModal: React.FC<Props> = ({ role, isOpen, onClose, onOpen }) => {
  const teamText = `تیم ${role.team === 'mafia' ? 'مافیا' : 'شهروندان'}`;
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" animationPreset="fade">
      <Modal.Content maxH="70%">
        <Modal.Header>
          <HStack w="full">
            <Box
              bg={role.team === 'citizens' ? 'green.700' : 'primary.600'}
              p="1"
              rounded="md"
              _text={{ color: 'white' }}>
              {teamText}
            </Box>
            <Spacer />
            <Text bold fontSize="lg">{role.name}</Text>
          </HStack>
        </Modal.Header>
        <Modal.Body>
          <Text textAlign="right">{role.description}</Text>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
};

export default InfoModal;
