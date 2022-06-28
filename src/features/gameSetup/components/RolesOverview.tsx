import {
  citizenCountSelector,
  gameRolesSelector,
  mafiaCountSelector,
} from '@store';
import { Box, Flex, Text, VStack } from 'native-base';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { RoleChip } from './RoleChip';

type Props = {} & React.ComponentProps<typeof Box>;

export const RolesOverview: React.FC<Props> = ({ ...props }) => {
  const gameRoles = useRecoilValue(gameRolesSelector);
  const mafiaCount = useRecoilValue(mafiaCountSelector);
  const citizensCount = useRecoilValue(citizenCountSelector);

  const rolesTitle = `${citizensCount} شهروند و ${mafiaCount} مافیا`;
  return (
    <Box bg="secondary.700" _light={{ bg: 'gray.100' }} rounded="lg" {...props}>
      <VStack p="2">
        <Text fontFamily="heading" fontSize="xl" textAlign="right" mx="2">
          {rolesTitle}
        </Text>
        <Flex flexWrap="wrap" flexDirection="row-reverse">
          {gameRoles.map((r, ind) => (
            <RoleChip key={ind} role={r} m="1" />
          ))}
        </Flex>
      </VStack>
    </Box>
  );
};
