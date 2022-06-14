import { Player } from "@models";
import { atom } from "recoil";

export const playersListState = atom<Player[]>({
  key: 'playersListState',
  default: []
});
