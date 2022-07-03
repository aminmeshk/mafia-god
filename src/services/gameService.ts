import { GamePlayer, Player, Role } from '@models';
import { shuffle } from './utils';

export class GameService {
  static createGamePlayers = (
    players: Player[],
    roles: Role[],
  ): GamePlayer[] => {
    const shuffledPlayers = [...players];
    shuffle(shuffledPlayers);

    const gamePlayers: GamePlayer[] = [];

    for (let i = 0; i < shuffledPlayers.length; i++) {
      const player = shuffledPlayers[i];
      const role = roles[i];
      gamePlayers.push({
        id: i + 1,
        role: role,
        player: player,
        status: { life: 'alive' },
      });
    }
    return gamePlayers;
  };
}
