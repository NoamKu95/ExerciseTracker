import {DayPeriod} from '../constants/enums';
import {HistoryExerciseSection} from '../models/ui/historyExerciseSection';

export const historyWorkoutsMock: HistoryExerciseSection[] = [
  {
    title: 'השבוע',
    data: [
      {
        id: '34rgsf34',
        name: 'אימון רגליים קליל',
        date: '22.12.23',
        time: DayPeriod.EVENING,
      },
      {
        id: '35rgs64',
        name: 'אימון לגב קשה רצח',
        date: '22.12.23',
        time: DayPeriod.MORNING,
      },
    ],
  },
  {
    title: 'החודש',
    data: [
      {
        id: '324f39f',
        name: 'אימון רגליים קליל',
        date: '16.12.23',
        time: DayPeriod.MORNING,
      },
      {
        id: '35r5564',
        name: 'אימון חזה קליל',
        date: '14.12.23',
        time: DayPeriod.NOON,
      },
    ],
  },
];
