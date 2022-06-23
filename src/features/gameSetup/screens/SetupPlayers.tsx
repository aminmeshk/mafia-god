import React, { useCallback } from 'react';
import { KeyboardAvoidingView, useTheme, VStack } from 'native-base';
import { AppStackParamList } from '@types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  PlayerInputContainer,
  PlayersBottomCard,
  PlayersList,
} from '../components';
import { useHeaderHeight } from '@react-navigation/elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { usePlayersStore } from '@hooks';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupPlayers'>;

const SetupPlayersScreen: React.FC<Props> = ({ navigation }) => {
  const { addPlayer, players, removePlayer } = usePlayersStore();
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();
  const theme = useTheme();

  const goToNextScreen = useCallback(() => {
    navigation.navigate('SetupRoles');
  }, [navigation]);

  return (
    <KeyboardAvoidingView
      _android={{ enabled: false }}
      behavior="padding"
      flex={1}
      keyboardVerticalOffset={headerHeight - insets.bottom + theme.space[3]}>
      <VStack flex={1}>
        <PlayerInputContainer onAdd={addPlayer} />
        <PlayersList players={players} onRemove={removePlayer} />
        <PlayersBottomCard
          playersCount={players.length}
          onPress={goToNextScreen}
        />
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default SetupPlayersScreen;
