import {subDays} from 'date-fns';
import {SavedWorkout} from '../models/core/workout';

export const savedWorkoutDetailsMock: SavedWorkout = {
  id: '23423r23',
  name: 'אימון חזה קליל',
  date: subDays(new Date(), 4),
  savingDate: new Date(),
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
