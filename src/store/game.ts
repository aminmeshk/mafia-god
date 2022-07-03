import { Game, GamePlayer, Role, RoleSlug } from '@models';
import { atom, selector } from 'recoil';

export const gameState = atom<Game>({
  key: 'gameState',
  default: {
    roles: [],
    gamePlayers: [],
    status: { currentRound: 1, currentTime: 'day', dealtGamePlayerIds: [] },
    rounds: [],
  },
});

export const gameRolesSelector = selector<Role[]>({
  key: 'gameRolesSelector',
  get: ({ get }) => {
    const game = get(gameState);
    return [...game.roles].sort((a, b) => a.id - b.id);
  },
});

export const gameRolesCountSelector = selector<{ [key in RoleSlug]?: number }>({
  key: 'gameRolesCountSelector',
  get: ({ get }) => {
    const game = get(gameState);
    const result: { [key in RoleSlug]?: number } = {};
    for (const role of game.roles) {
      result[role.slug] = (result[role.slug] ?? 0) + 1;
    }
    return result;
  },
});

export const rolesCountSelector = selector<number>({
  key: 'rolesCountSelector',
  get: ({ get }) => {
    const game = get(gameState);
    return game.roles.length;
  },
});

export const mafiaCountSelector = selector<number>({
  key: 'mafiaCountSelector',
  get: ({ get }) => {
    const game = get(gameState);
    return game.roles.filter(x => x.team === 'mafia').length;
  },
});

export const citizenCountSelector = selector<number>({
  key: 'citizenCountSelector',
  get: ({ get }) => {
    const game = get(gameState);
    return game.roles.filter(x => x.team === 'citizens').length;
  },
});

export const gamePlayersSelector = selector<GamePlayer[]>({
  key: 'gamePlayersSelector',
  get: ({ get }) => {
    const game = get(gameState);
    return game.gamePlayers;
  },
});

export const undealtGamePlayersSelector = selector<GamePlayer[]>({
  key: 'undealtGamePlayersSelector',
  get: ({ get }) => {
    const game = get(gameState);
    return game.gamePlayers.filter(
      x => !game.status.dealtGamePlayerIds.includes(x.id),
    );
  },
});
