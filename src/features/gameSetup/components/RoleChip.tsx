import { Role } from '@models';
import { Box } from 'native-base';
import React from 'react';

type Props = {
  role: Role;
} & React.ComponentProps<typeof Box>;

export const RoleChip: React.FC<Props> = ({ role, ...props }) => {
  return (
    <Box
      px="2"
      py="1"
      rounded="lg"
      bg={role.team === 'mafia' ? 'red.700:alpha.20' : 'green.700:alpha.20'}
      {...props}>
      {role.name}
    </Box>
  );
};
