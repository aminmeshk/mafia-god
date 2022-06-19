import { Box } from 'native-base';
import React from 'react';

type Props = {};

const ItemSeparator: React.FC<Props> = () => {
  return (
    <Box
      bg="gray.300:alpha.10"
      _light={{ bg: 'gray.400:alpha.30' }}
      alignSelf="stretch"
      h="1px"
    />
  );
};

export default ItemSeparator;
