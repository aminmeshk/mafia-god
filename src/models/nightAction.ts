type GeneralNightAction = {
  gamePlayerId: number;
  disabled: boolean;
};

type DoctorAction = GeneralNightAction & {
  savedPlayerId?: number;
};

type DetectiveAction = GeneralNightAction & {
  inquiryPlayerId?: number;
  answer?: boolean;
};

type SniperAction = GeneralNightAction & {
  shotPlayerId?: number;
  performed?: boolean;
};

type DieHardAction = GeneralNightAction & {
  performed?: boolean;
};

type SalesmanAction = GeneralNightAction & {
  performed?: boolean;
  saledPlayerId?: number;
};

type BartenderAction = GeneralNightAction & {
  performed?: boolean;
  drunkPlayerId?: number;
};

type PsychiatristAction = GeneralNightAction & {
  performed?: boolean;
  silencedPlayerId?: number;
};

type MafiaTeamAction = GeneralNightAction & {
  killedPlayerId?: number;
};

type DoctorLecterAction = GeneralNightAction & {
  savedPlayerId?: boolean;
};

type JokerAction = GeneralNightAction & {
  jokedPlayerId?: number;
};

export type NightAction =
  | DoctorAction
  | DetectiveAction
  | SniperAction
  | DieHardAction
  | SalesmanAction
  | BartenderAction
  | PsychiatristAction
  | MafiaTeamAction
  | DoctorLecterAction
  | JokerAction;
