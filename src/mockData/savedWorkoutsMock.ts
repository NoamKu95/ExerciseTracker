import {format, subDays} from 'date-fns';
import {SavedWorkout} from '../models/core/workout';

export const savedWorkoutsMock: SavedWorkout[] = [
  {
    id: 'f3rtsg5',
    name: 'אימון רגליים קשוח',
    date: format(subDays(new Date(), 7), 'dd.MM.yy'),
    savingDate: format(new Date(), 'dd.MM.yy'),
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
    date: format(subDays(new Date(), 17), 'dd.MM.yy'),
    savingDate: format(new Date(), 'dd.MM.yy'),
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
