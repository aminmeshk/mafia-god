import { Role } from '@models';
import { atom } from 'recoil';

export const rolesListState = atom<Role[]>({
  key: 'rolesListState',
  default: [
    {
      id: 1,
      name: 'شهروند ساده',
      slug: 'citizen',
      team: 'citizens',
      constraints: {},
      description:
        'قابلیت منحصر به فردی در شب ندارد و مهمترین مشارکت وی در بخش روز و رأی‌گیری است.',
    },
    {
      id: 2,
      name: 'دکتر',
      slug: 'doctor',
      team: 'citizens',
      constraints: {
        maxActions: Infinity,
        firstNightSaves: 2,
        maxSelfSaves: 2,
      },
      description:
        'هر شب می‌تواند جان یک نفر را از شلیک شب نجات دهد. او جان خودش را فقط یک بار می‌تواند نجات دهد.',
    },
    {
      id: 3,
      name: 'کارآگاه',
      slug: 'detective',
      team: 'citizens',
      constraints: {
        maxActions: Infinity,
      },
      description:
        'هر شب می‌تواند استعلام یک نفر را از گرداننده برای تعیین وضعیت شهروند یا مافیا بگیرد. اگر جوکر بازیکنی را انتخاب کرده باشد، استعلام او برعکس می‌شود. رئیس مافیا همیشه به او شهروند معرفی می‌شود.',
    },
    {
      id: 4,
      name: 'حرفه ای',
      slug: 'sniper',
      team: 'citizens',
      constraints: {
        maxActions: Infinity,
      },
      description:
        'هر شب می‌تواند به یک مافیا شلیک کند. اما با شلیک اشتباه به شهروندان خودش از بازی خارج می‌شود.',
    },
    {
      id: 5,
      name: 'جان سخت',
      slug: 'die-hard',
      team: 'citizens',
      constraints: {
        maxActions: 2,
        extraLifes: 1,
      },
      description:
        'با شلیک اول از سوی مافیا کشته نمی‌شود و البته از شلیک اول نیز بی‌خبر است. گرفتن استعلام نفرات خارج شده از بازی به عهده اوست. او دوبار می‌تواند استعلام وضعیت بگیرد.',
    },
    {
      id: 6,
      name: 'فروشنده',
      team: 'citizens',
      slug: 'salesman',
      constraints: {
        maxActions: 1,
      },
      description:
        'یک بار در طول بازی می‌تواند توانایی یک فرد را برای کل بازی از وی بگیرد. کسی که انتخاب فروشنده بوده، فردای همان روز توسط راوی اعلام می‌شود',
    },
    {
      id: 7,
      name: 'ساقی',
      slug: 'bartender',
      team: 'citizens',
      constraints: {
        maxActions: 2,
      },
      description:
        'ساقی ۲ بار در طول بازی میتواند نقش یکی از بازیکنان را خنثی کند. آن بازیکن از خنثی شدن نقشش با خبر خواهد شد.',
    },
    {
      id: 8,
      name: 'روانپزشک',
      slug: 'psychiatrist',
      team: 'citizens',
      constraints: {
        maxActions: Infinity,
      },
      description:
        'در شب میتواند یکی از بازیکنان را برای یک روز ساکت کند. فقط ۲ بار میتواند این کار را انجام دهد.',
    },
    {
      id: 9,
      name: 'گردن کلفت',
      slug: 'thug',
      team: 'citizens',
      constraints: {
        daysLivingAfterElection: 1,
      },
      description:
        'اگر در روز با رای گیری حذف شود، گرداننده نقش او را اعلام میکند و گردن کلفت تا پایان روز بعد در بازی خواهد ماند',
    },
    {
      id: 30,
      name: 'مافیای ساده',
      slug: 'mafia',
      team: 'mafia',
      constraints: {},
      description:
        'از اعضای مافیا که در شب با همراهی خود به پدرخوانده، دکتر لکتر و جوکر گروه مشورت می‌دهد.',
    },
    {
      id: 31,
      name: 'پدرخوانده',
      slug: 'godfather',
      team: 'mafia',
      constraints: {},
      description:
        'استعلام پدرخوانده برای کارآگاه همیشه شهروند است. و تعیین شلیک شب از طرف گروه مافیا به عهده اوست.',
    },
    {
      id: 32,
      name: 'دکتر لکتر (دکتر مافیا)',
      slug: 'doctor-lecter',
      team: 'mafia',
      constraints: {
        maxActions: Infinity,
        maxSelfSaves: 1,
      },
      description:
        'هرشب می‌تواند یک نفر را از شلیک حرفه‌ای نجات دهد. لکتر جان خودش را فقط یک بار می‌تواند نجات دهد.',
    },
    {
      id: 33,
      name: 'جوکر',
      slug: 'joker',
      team: 'mafia',
      constraints: {
        maxActions: Infinity,
        maxSelfSaves: 1,
      },
      description:
        'هر شب می‌تواند یکی از اعضای مافیا یا شهروندان را انتخاب کند تا در آن شب استعلام آن فرد برای کارآگاه برعکس شود. او فقط یکبار می‌تواند خودش را انتخاب کند. جوکر نمی‌تواند برای دو شب متوالی بازیکنی را انتخاب کند.',
    },
  ],
});
