import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { VStack } from 'native-base';
import { RolesList } from '../components';
import { useRolesStore } from '@hooks';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupRoles'>;

const SetupRolesScreen: React.FC<Props> = () => {
  const { roles } = useRolesStore();
  return (
    <VStack flex={1}>
      <RolesList roles={roles} />
    </VStack>
  );
};

export default SetupRolesScreen;
