import { Role } from '@models';
import { AspectRatio, Box, Button, Spacer, Text, VStack } from 'native-base';
import React, { useCallback, useState } from 'react';

type Props = {
  role: Role;
  isShowingRole: boolean;
  onShow: () => void;
} & React.ComponentProps<typeof AspectRatio>;

type HideContentProps = {
  onPress: () => void;
};

const HideContent: React.FC<HideContentProps> = ({ onPress }) => {
  return (
    <VStack flex={1} justifyContent="center" alignItems="center">
      <Button size="lg" onPress={onPress}>
        دیدن کارت
      </Button>
    </VStack>
  );
};

type RoleContentProps = {
  role: Role;
};

const RoleContent: React.FC<RoleContentProps> = ({ role }) => {
  const teamText = `تیم: ${role.team === 'mafia' ? 'مافیا' : 'شهروندان'}`;
  return (
    <VStack flex={1} overflow="hidden" rounded="3xl">
      <VStack
        bg={role.team === 'mafia' ? 'red.700' : 'green.700'}
        w="200%"
        h="40%"
        pb="3"
        mt="-15%"
        ml="-55%"
        justifyContent="flex-end"
        style={{ transform: [{ rotateZ: '-10deg' }] }}>
        <Text fontSize="3xl" textAlign="center" color="white" bold>
          {role.name}
        </Text>
        <Text textAlign="center" color="white" fontSize="lg" bold>
          {teamText}
        </Text>
      </VStack>
      <Text mt="12" textAlign="center" p="3" fontSize="lg">
        {role.description}
      </Text>
      <Spacer />
      <Text fontSize="lg" textAlign="center" m="6">
        وقتی خوندی، گوشی رو بده به خدای بازی
      </Text>
    </VStack>
  );
};

export const RoleCard: React.FC<Props> = ({
  role,
  isShowingRole,
  onShow,
  ...props
}) => {
  return (
    <AspectRatio
      ratio={0.7}
      rounded="3xl"
      shadow="5"
      bg="secondary.900"
      _light={{
        bg: 'gray.100',
      }}
      {...props}>
      {isShowingRole ? (
        <RoleContent role={role} />
      ) : (
        <HideContent onPress={onShow} />
      )}
    </AspectRatio>
  );
};
