import { GamePlayerStatus } from './gamePlayerStatus';
import { Player } from './player';
import { Role } from './role';

export type GamePlayer = {
  player?: Player;
  role: Role;
  status: GamePlayerStatus;
};
