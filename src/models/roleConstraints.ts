export type GeneralConstraints = {};

export type NightConstraints = {
  maxActions: number;
};

export type CitizenConstraints = GeneralConstraints;

export type MafiaConstraints = GeneralConstraints;

export type GodFatherConstraints = GeneralConstraints;

export type DoctorConstraints = GeneralConstraints &
  NightConstraints & {
    firstNightSaves: number;
    maxSelfSaves: number;
  };

export type DetectiveConstraints = GeneralConstraints & NightConstraints & {};

export type SniperConstraints = GeneralConstraints & NightConstraints & {};

export type DieHardConstraints = GeneralConstraints &
  NightConstraints & {
    extraLifes: number;
  };

export type SalesmanConstraints = GeneralConstraints & NightConstraints & {};

export type BartenderConstraints = GeneralConstraints & NightConstraints & {};

export type DoctorLecterConstraints = GeneralConstraints &
  NightConstraints & {
    maxSelfSaves: number;
  };

export type JokerConstraints = GeneralConstraints &
  NightConstraints & {
    maxSelfSaves: number;
  };

export type PsychiatristConstraints = GeneralConstraints &
  NightConstraints & {};

export type ThugConstraints = GeneralConstraints & {
  daysLivingAfterElection: number;
};

export type RoleConstraints =
  | CitizenConstraints
  | MafiaConstraints
  | GodFatherConstraints
  | DoctorConstraints
  | DetectiveConstraints
  | SniperConstraints
  | DieHardConstraints
  | SalesmanConstraints
  | BartenderConstraints
  | DoctorLecterConstraints
  | JokerConstraints
  | PsychiatristConstraints
  | ThugConstraints;
