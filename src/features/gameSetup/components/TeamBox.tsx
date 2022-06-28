import { Team } from '@models';
import { Box } from 'native-base';
import React from 'react';

type Props = {
  team: Team;
  textMode: 'teamAndPluralName' | 'pluralName' | 'singleName';
} & React.ComponentProps<typeof Box>;

export const TeamBox: React.FC<Props> = React.memo(
  ({ team, textMode, ...props }) => {
    const teamText = `${
      team === 'mafia'
        ? textMode === 'teamAndPluralName'
          ? 'تیم مافیا'
          : 'مافیا'
        : textMode === 'teamAndPluralName'
        ? 'تیم شهروندان'
        : textMode === 'pluralName'
        ? 'شهروندان'
        : 'شهروند'
    }`;
    return (
      <Box
        {...props}
        bg={team === 'citizens' ? 'green.700' : 'red.700'}
        p="1"
        rounded="md"
        _text={{ color: 'white' }}>
        {teamText}
      </Box>
    );
  },
);
