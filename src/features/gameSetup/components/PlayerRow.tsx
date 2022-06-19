import { HStack, Text } from 'native-base';
import React from 'react';

type Props = {
  name: string;
};

const PlayerRow: React.FC<Props> = ({ name }) => {
  return (
    <HStack py="2" px="3">
      <Text flex={1} fontSize="lg">
        {name}
      </Text>
    </HStack>
  );
};

export default PlayerRow;
