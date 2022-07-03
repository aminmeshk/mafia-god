import { useCardDealing } from '@hooks';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { gamePlayersSelector } from '@store';
import { AppStackParamList } from '@types';
import { Heading, HStack, VStack } from 'native-base';
import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { PlayerChip } from '../components';

type Props = NativeStackScreenProps<AppStackParamList, 'SelectPlayerToDeal'>;

const SelectPlayerToDealScreen: React.FC<Props> = ({ navigation }) => {
  const { undealtGamePlayers } = useCardDealing();
  const gamePlayers = useRecoilValue(gamePlayersSelector);

  const firstDeal = gamePlayers.length === undealtGamePlayers.length;
  const title = firstDeal ? 'از کدوم بازیکن شروع کنیم؟' : 'بازیکن بعدی کیه؟';

  const showCard = useCallback(
    (gamePlayerId: number) => {
      navigation.navigate('ShowCard', {
        gamePlayerId,
      });
    },
    [navigation],
  );

  return (
    <VStack flex={1}>
      <Heading textAlign="center" mt="20">
        {title}
      </Heading>
      <HStack
        flex={1}
        flexWrap="wrap"
        flexDirection="row-reverse"
        justifyContent="center"
        alignContent="center"
        alignItems="center"
        p="3">
        {undealtGamePlayers.map((gp, ind) => (
          <PlayerChip
            key={ind}
            name={gp.player.name}
            team="none"
            m="2"
            onPress={() => showCard(gp.id)}
          />
        ))}
      </HStack>
    </VStack>
  );
};

export default SelectPlayerToDealScreen;
