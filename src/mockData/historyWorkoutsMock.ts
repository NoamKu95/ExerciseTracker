import {format} from 'date-fns';
// Constants
import {DayPeriod} from '../constants/enums';
// Models
import {CategorizedHistoryWorkouts} from '../models/core/workout';

export const historyWorkoutsMock: CategorizedHistoryWorkouts[] = [
  {
    categoryName: 'השבוע',
    data: [
      {
        id: '34rgsf34',
        name: 'אימון רגליים קליל',
        date: format(new Date(27, 12, 2023), 'dd.MM.yy'),
        time: DayPeriod.EVENING,
      },
      {
        id: '35rgs64',
        name: 'אימון לגב קשה רצח',
        date: format(new Date(22, 12, 2023), 'dd.MM.yy'),
        time: DayPeriod.MORNING,
      },
    ],
  },
  {
    categoryName: 'החודש',
    data: [
      {
        id: '59fsf934',
        name: 'אימון רגליים קליל',
        date: format(new Date(16, 12, 2023), 'dd.MM.yy'),
        time: DayPeriod.MORNING,
      },
      {
        id: '35r5564',
        name: 'אימון חזה קליל',
        date: format(new Date(14, 12, 2023), 'dd.MM.yy'),
        time: DayPeriod.NOON,
      },
    ],
  },
];
