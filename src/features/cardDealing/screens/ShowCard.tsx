import { useCardDealing } from '@hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { gamePlayersSelector } from '@store';
import { AppStackParamList } from '@types';
import { Button, Heading, VStack } from 'native-base';
import React, { useCallback, useMemo, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useRecoilValue } from 'recoil';
import { RoleCard } from '../components';

type Props = NativeStackScreenProps<AppStackParamList, 'ShowCard'>;

const ShowCardScreen: React.FC<Props> = ({
  navigation,
  route: {
    params: { gamePlayerId },
  },
}) => {
  const gamePlayers = useRecoilValue(gamePlayersSelector);
  const { dealToGamePlayer } = useCardDealing();
  const gp = useMemo(() => {
    const index = gamePlayers.findIndex(x => x.id === gamePlayerId);
    return gamePlayers[index];
  }, [gamePlayers, gamePlayerId]);

  const [isShowing, setIsShowing] = useState(false);

  const showContent = useCallback(() => {
    setIsShowing(true);
    dealToGamePlayer(gamePlayerId);
  }, [dealToGamePlayer, gamePlayerId]);

  const insets = useSafeAreaInsets();
  return (
    <VStack flex={1}>
      <VStack flex={1} justifyContent="center" px="6">
        <Heading textAlign="center" mb="3" bottom="5">
          {gp.player.name}
        </Heading>
        <RoleCard
          role={gp.role}
          isShowingRole={isShowing}
          onShow={showContent}
        />
      </VStack>

      <Button
        variant="ghost"
        _text={{ fontSize: '16' }}
        mb={insets.bottom + 20}
        alignSelf="center"
        isDisabled={!isShowing}
        onPress={() => {
          navigation.goBack();
        }}>
        خدای بازی هستم، بریم بازیکن بعدی
      </Button>
    </VStack>
  );
};

export default ShowCardScreen;
