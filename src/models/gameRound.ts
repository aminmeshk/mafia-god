import { DayAction } from './dayAction';
import { NightAction } from './nightAction';

export type GameRound = {
  number: number;
  generalVotes: { [key: number]: number };
  finalVotes: { [key: number]: number };
  playerIdkilledInDay?: number | 'none';
  dayActions: DayAction[];
  nightActions: NightAction[];
};
