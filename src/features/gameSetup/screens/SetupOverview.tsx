import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { ScrollView, VStack } from 'native-base';
import { PlayersOverview, RolesOverview } from '../components';
import { BottomButton } from '@components';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupOverview'>;

const SetupOverviewScreen: React.FC<Props> = () => {
  return (
    <VStack flex={1}>
      <ScrollView flex={1} p="3">
        <PlayersOverview my="2" />
        <RolesOverview my="2" />
      </ScrollView>
      <BottomButton>شروع بازی</BottomButton>
    </VStack>
  );
};

export default SetupOverviewScreen;
