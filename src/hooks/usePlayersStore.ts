import { useCallback } from 'react';
import { playersListState } from '@store';
import { useRecoilState } from 'recoil';

export const usePlayersStore = () => {
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

  return {
    players,
    addPlayer,
    removePlayer,
  };
};
