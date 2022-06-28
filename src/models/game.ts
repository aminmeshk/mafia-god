import { GamePlayer } from './gamePlayer';
import { Role } from './role';

export type Game = {
  roles: Role[];
  gamePlayers: GamePlayer[];
};
