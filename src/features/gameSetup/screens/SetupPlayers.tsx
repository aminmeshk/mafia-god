import React, { useCallback, useState } from 'react';
import { FlatList, VStack } from 'native-base';
import { AppStackParamList } from '@types';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import {
  ItemSeparator,
  PlayerInputContainer,
  PlayerRow,
  PlayersBottomCard,
} from '../components';
import { useRecoilState } from 'recoil';
import { playersListState } from '@store';

type Props = NativeStackScreenProps<AppStackParamList, 'SetupPlayers'>;

const SetupPlayersScreen: React.FC<Props> = () => {
  const [players, setPlayers] = useRecoilState(playersListState);

  const addPlayer = useCallback(
    (name: string) => {
      setPlayers(prev => {
        if (prev.filter(x => x.name === name).length > 0) {
          return prev;
        }
        return [{ name }, ...prev];
      });
    },
    [setPlayers],
  );

  const removePlayer = useCallback(
    (index: number) => {
      setPlayers(prev => [...prev.slice(0, index), ...prev.slice(index + 1)]);
    },
    [setPlayers],
  );

  const renderItem = ({
    item,
    index,
  }: {
    item: { name: string };
    index: number;
  }) => {
    return <PlayerRow name={item.name} onDelete={() => removePlayer(index)} />;
  };
  return (
    <VStack flex={1}>
      <PlayerInputContainer onAdd={addPlayer} />
      <FlatList
        flex={1}
        data={players}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        keyboardShouldPersistTaps="handled"
      />
      <PlayersBottomCard playersCount={players.length} />
    </VStack>
  );
};

export default SetupPlayersScreen;
