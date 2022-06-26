import { Box } from 'native-base';
import React from 'react';

type Props = {} & React.ComponentProps<typeof Box>;

export const ItemSeparator: React.FC<Props> = React.memo(({ ...props }) => {
  return (
    <Box
      bg="gray.300:alpha.10"
      _light={{ bg: 'gray.400:alpha.30' }}
      alignSelf="stretch"
      h="1px"
      {...props}
    />
  );
});
