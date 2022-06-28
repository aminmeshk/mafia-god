import React from 'react';
import { Box } from 'native-base';

type Props = {
  name: string;
} & React.ComponentProps<typeof Box>;

export const PlayerChip: React.FC<Props> = ({ name, ...props }) => {
  return (
    <Box
      px="2"
      py="1"
      rounded="lg"
      bg="secondary.600"
      _light={{ bg: 'gray.200' }}
      {...props}>
      {name}
    </Box>
  );
};
