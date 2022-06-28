import { Player } from '@models';
import { atom } from 'recoil';

export const playersListState = atom<Player[]>({
  key: 'playersListState',
  default: [
    { name: 'امین مشک' },
    { name: 'غزل عارف زاده' },
    { name: 'عسل عارف زاده' },
    { name: 'نیکو مرادی' },
    { name: 'آذر آقایی' },
    { name: 'محمد گودرزی' },
    { name: 'یاسمن منصوری' },
    { name: 'رضا نظری' },
    { name: 'الهام رسن پور' },
    { name: 'الهام مهسا رسن پور' },
  ],
});
