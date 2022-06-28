import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { VStack } from 'native-base';
import { RolesBottomCard, RolesList } from '../components';
import { useRolesStore } from '@hooks';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupRoles'>;

const SetupRolesScreen: React.FC<Props> = ({ navigation }) => {
  const { roles } = useRolesStore();

  const goToNextScreen = useCallback(() => {
    navigation.navigate('SetupOverview');
  }, [navigation]);

  return (
    <VStack flex={1}>
      <RolesList roles={roles} />
      <RolesBottomCard onPress={goToNextScreen} />
    </VStack>
  );
};

export default SetupRolesScreen;
