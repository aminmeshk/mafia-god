import { rolesListState } from '@store';
import { useRecoilState } from 'recoil';

export const useRolesStore = () => {
  const [roles] = useRecoilState(rolesListState);

  return {
    roles,
  };
};
