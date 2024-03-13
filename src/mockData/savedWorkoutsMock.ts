import {subDays} from 'date-fns';
import {Workout} from '../models/core/workout';

export const savedWorkoutsMock: Workout[] = [
  {
    id: 'f3rtsg5',
    name: 'אימון רגליים קשוח',
    date: subDays(new Date(), 7),
    exercises: [
      {
        id: 'fsdfds',
        name: 'גובלט סקוואט',
        sets: [
          {
            weight: 50,
            reps: 7,
          },
        ],
      },
    ],
  },
  {
    id: '45fs9oo',
    name: 'אימון גב כתפיים',
    date: subDays(new Date(), 17),
    exercises: [
      {
        id: 'fsd34rfds',
        name: 'מתח',
        sets: [
          {
            weight: 12,
            reps: 10,
          },
          {
            weight: 12,
            reps: 10,
          },
        ],
      },
      {
        id: 'fsd34fsfrfds',
        name: 'לחיצת חזה',
        sets: [
          {
            weight: 45,
            reps: 12,
          },
        ],
      },
    ],
  },
];
