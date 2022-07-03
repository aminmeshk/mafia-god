import React from 'react';
import { Button, Pressable, Text } from 'native-base';
import { Team } from '@models';

type Props = {
  name: string;
  team: Team | 'none';
} & React.ComponentProps<typeof Button>;

export const PlayerChip: React.FC<Props> = ({ name, team, ...props }) => {
  return (
    <Pressable
      p="3"
      rounded="xl"
      bg={
        team === 'mafia'
          ? 'red.700:alpha.30'
          : team === 'citizens'
          ? 'green.700:alpha.20'
          : 'secondary.700'
      }
      _light={{ bg: 'gray.300' }}
      _pressed={{ opacity: 0.6 }}
      {...props}>
      <Text fontSize="lg">{name}</Text>
    </Pressable>
  );
};
