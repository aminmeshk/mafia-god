import { Role, RoleSlug } from '@models';
import {
  citizenCountSelector,
  gameRolesCountSelector,
  gameState,
  mafiaCountSelector,
  rolesCountSelector,
} from '@store';
import { useCallback } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

export const useGameRolesStore = () => {
  const mafiaCount = useRecoilValue(mafiaCountSelector);
  const citizenCount = useRecoilValue(citizenCountSelector);
  const rolesCount = useRecoilValue(rolesCountSelector);
  const gameRolesCount = useRecoilValue(gameRolesCountSelector);
  const [, setGame] = useRecoilState(gameState);

  const addRole = useCallback(
    (role: Role) => {
      setGame(prev => ({
        ...prev,
        roles: [...prev.roles, role],
      }));
    },
    [setGame],
  );

  const removeRole = useCallback(
    (roleId: number) => {
      setGame(prev => {
        const ind = prev.roles.findIndex(x => x.id === roleId);
        return {
          ...prev,
          roles: [...prev.roles.slice(0, ind), ...prev.roles.slice(ind + 1)],
        };
      });
    },
    [setGame],
  );

  const getRoleCount = useCallback(
    (roleSlug: RoleSlug) => {
      return gameRolesCount[roleSlug] ?? 0;
    },
    [gameRolesCount],
  );

  return {
    citizenCount,
    mafiaCount,
    rolesCount,
    addRole,
    removeRole,
    gameRolesCount,
    getRoleCount,
  };
};
