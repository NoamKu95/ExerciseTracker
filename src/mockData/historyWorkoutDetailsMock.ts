import {format, subDays} from 'date-fns';
import {DayPeriod} from '../constants/enums';
import {HistoryWorkout} from '../models/core/workout';

export const specificHistoryWorkout: HistoryWorkout = {
  id: '23423r23',
  name: 'אימון חזה קליל',
  date: format(subDays(new Date(), 4), 'DDMMYY'),
  time: DayPeriod.MORNING,
  exercises: [
    // CategorizedExercises[]
    {
      categoryName: 'תרגילי חזה',
      data: [
        //Exercise[]
        {
          id: 'sf435sf',
          name: 'לחיצה בשיפוע חיובי',
          sets: [
            // Set[]
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
};
