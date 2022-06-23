import { Team } from './team';

export type Role = {
  id: number;
  slug: string;
  name: string;
  description: string;
  team: Team;
};
