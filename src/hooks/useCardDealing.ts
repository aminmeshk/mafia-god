import { gameState, undealtGamePlayersSelector } from '@store';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export const useCardDealing = () => {
  const undealtGamePlayers = useRecoilValue(undealtGamePlayersSelector);
  const [game, setGame] = useRecoilState(gameState);
  const dealToGamePlayer = useCallback(
    (gamePlayerId: number) => {
      setGame(prev => ({
        ...prev,
        status: {
          ...prev.status,
          dealtGamePlayerIds: prev.status.dealtGamePlayerIds.includes(
            gamePlayerId,
          )
            ? [...prev.status.dealtGamePlayerIds]
            : [...prev.status.dealtGamePlayerIds, gamePlayerId],
        },
      }));
    },
    [setGame],
  );

  return {
    undealtGamePlayers,
    dealToGamePlayer,
  };
};
