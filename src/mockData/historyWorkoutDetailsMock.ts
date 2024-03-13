import {subDays} from 'date-fns';
import {DayPeriod} from '../constants/enums';
import {HistoryWorkout} from '../models/core/exercise';

export const historyWorkout: HistoryWorkout = {
  id: '23423r23',
  name: 'אימון חזה קליל',
  date: subDays(new Date(), 4),
  time: DayPeriod.MORNING,
  exercises: [
    {
      title: 'תרגילי חזה',
      data: [
        {
          sectionTitle: 'תרגילי חזה',
          sectionExercises: [
            {
              id: 'sf435sf',
              name: 'לחיצה בשיפוע חיובי',
              sets: [
                {
                  weight: 8,
                  reps: 10,
                },
                {
                  weight: 10,
                  reps: 6,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      title: 'תרגילי רגליים',
      data: [
        {
          sectionTitle: 'תרגילי רגליים',
          sectionExercises: [
            {
              id: 'sf4363sf',
              name: 'מכרגע בולגרי',
              sets: [
                {
                  weight: 8,
                  reps: 10,
                },
                {
                  weight: 10,
                  reps: 6,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
