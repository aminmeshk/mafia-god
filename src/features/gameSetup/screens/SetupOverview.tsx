import React, { useCallback } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { AppStackParamList } from '@types';
import { ScrollView, VStack } from 'native-base';
import { PlayersOverview, RolesOverview } from '../components';
import { BottomButton } from '@components';
import { GameService } from '@services';
import { useGameStart } from '@hooks';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupOverview'>;

const SetupOverviewScreen: React.FC<Props> = ({ navigation }) => {
  const { startGame } = useGameStart();

  return (
    <VStack flex={1}>
      <ScrollView flex={1} p="3">
        <PlayersOverview my="2" />
        <RolesOverview my="2" />
      </ScrollView>
      <BottomButton onPress={startGame}>شروع بازی</BottomButton>
    </VStack>
  );
};

export default SetupOverviewScreen;
