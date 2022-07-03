import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameService } from '@services';
import { gameRolesSelector, gameState, playersListState } from '@store';
import { AppStackParamList } from '@types';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export const useGameStart = () => {
  const players = useRecoilValue(playersListState);
  const roles = useRecoilValue(gameRolesSelector);
  const [, setGame] = useRecoilState(gameState);
  const navigation =
    useNavigation<NativeStackNavigationProp<AppStackParamList>>();

  const startGame = useCallback(() => {
    const gamePlayers = GameService.createGamePlayers(players, roles);
    setGame(prev => ({
      ...prev,
      gamePlayers: [...gamePlayers],
    }));
    navigation.reset({
      index: 0,
      routes: [{ name: 'SelectPlayerToDeal' }],
    });
  }, [players, roles, setGame, navigation]);

  return {
    startGame,
  };
};
