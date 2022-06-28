export type GeneralPlayerStatus = {
  life: 'alive' | 'dead';
};

export type NightPlayerStatus = GeneralPlayerStatus & {
  actionsDone: number;
};

export type DoctorPlayerStatus = NightPlayerStatus & {
  selfSavesDone: number;
};

export type DieHardPlayerStatus = NightPlayerStatus & {
  livesSpent: number;
};

export type DoctorLecterPlayerStatus = NightPlayerStatus & {
  selfSavesDone: number;
};

export type JokerPlayerStatus = NightPlayerStatus & {
  selfSavesDone: number;
  lastActionDoneToPlayerId?: number;
};

export type BartenderPlayerStatus = NightPlayerStatus & {
  lastActionDoneToPlayerId?: number;
};

export type ThugPlayerStatus = GeneralPlayerStatus & {
  removedAtDay?: number;
};

export type GamePlayerStatus =
  | GeneralPlayerStatus
  | NightPlayerStatus
  | DoctorPlayerStatus
  | DieHardPlayerStatus
  | DoctorLecterPlayerStatus
  | JokerPlayerStatus
  | BartenderPlayerStatus
  | ThugPlayerStatus;
