import { RoleSlug } from './roleSlug';
import { Team } from './team';

export type Role = {
  id: number;
  slug: RoleSlug;
  name: string;
  description: string;
  team: Team;
};
