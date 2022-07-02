import { GamePlayer } from './gamePlayer';
import { GameRound } from './gameRound';
import { Role } from './role';

export type Game = {
  roles: Role[];
  gamePlayers: GamePlayer[];
  status: {
    currentRound: number;
    currentTime: 'day' | 'night';
  };
  rounds: GameRound[];
};
