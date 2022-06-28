import {
  BartenderConstraints,
  CitizenConstraints,
  DetectiveConstraints,
  DieHardConstraints,
  DoctorConstraints,
  DoctorLecterConstraints,
  GodFatherConstraints,
  JokerConstraints,
  MafiaConstraints,
  PsychiatristConstraints,
  SalesmanConstraints,
  SniperConstraints,
  ThugConstraints,
} from './roleConstraints';
import { RoleSlug } from './roleSlug';
import { Team } from './team';

export type GeneralRole = {
  id: number;
  slug: RoleSlug;
  name: string;
  description: string;
  team: Team;
};

export type GeneralMafiaRole = {
  team: 'mafia';
};

export type GeneralCitizensRole = {
  team: 'citizens';
};

export type CitizenRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'citizen';
    constraints: CitizenConstraints;
  };

export type DoctorRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'doctor';
    constraints: DoctorConstraints;
  };

export type DetectiveRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'detective';
    constraints: DetectiveConstraints;
  };

export type SniperRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'sniper';
    constraints: SniperConstraints;
  };

export type DieHardRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'die-hard';
    constraints: DieHardConstraints;
  };

export type SalesmanRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'salesman';
    constraints: SalesmanConstraints;
  };

export type BartenderRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'bartender';
    constraints: BartenderConstraints;
  };

export type PsychiatristRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'psychiatrist';
    constraints: PsychiatristConstraints;
  };

export type ThugRole = GeneralRole &
  GeneralCitizensRole & {
    slug: 'thug';
    constraints: ThugConstraints;
  };

export type GodFatherRole = GeneralRole &
  GeneralMafiaRole & {
    slug: 'godfather';
    constraints: GodFatherConstraints;
  };

export type JokerRole = GeneralRole &
  GeneralMafiaRole & {
    slug: 'joker';
    constraints: JokerConstraints;
  };

export type DoctorLecterRole = GeneralRole &
  GeneralMafiaRole & {
    slug: 'doctor-lecter';
    constraints: DoctorLecterConstraints;
  };

export type MafiaRole = GeneralRole &
  GeneralMafiaRole & {
    slug: 'mafia';
    constraints: MafiaConstraints;
  };

export type Role =
  | CitizenRole
  | DoctorRole
  | DetectiveRole
  | SniperRole
  | DieHardRole
  | SalesmanRole
  | BartenderRole
  | GodFatherRole
  | DoctorLecterRole
  | JokerRole
  | MafiaRole
  | PsychiatristRole
  | ThugRole;
