import {
  MaterialCommunityIcons,
  Ionicons,
  MaterialIcons,
} from '@native-base/icons';
import { IconPackName } from '@types';
import { useMemo } from 'react';

type IconPack =
  | typeof MaterialIcons
  | typeof MaterialCommunityIcons
  | typeof Ionicons;

export const useIconPack = (iconPackName: IconPackName): IconPack | null => {
  const selectedIconPack: IconPack = useMemo(() => {
    switch (iconPackName) {
      case 'Ionicons':
        return Ionicons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'MaterialIcons':
        return MaterialIcons;
      default:
        return null;
    }
  }, [iconPackName]);
  return selectedIconPack;
};
