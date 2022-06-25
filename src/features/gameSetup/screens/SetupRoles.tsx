import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { VStack } from 'native-base';
import { RolesBottomCard, RolesList } from '../components';
import { useGameRolesStore, useRolesStore } from '@hooks';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupRoles'>;

const SetupRolesScreen: React.FC<Props> = () => {
  const { roles } = useRolesStore();
  const { getRoleCount, addRole, removeRole } = useGameRolesStore();
  return (
    <VStack flex={1}>
      <RolesList roles={roles} {...{ getRoleCount, addRole, removeRole }} />
      <RolesBottomCard />
    </VStack>
  );
};

export default SetupRolesScreen;
