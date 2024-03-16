import {format} from 'date-fns';
import {SavedWorkout} from '../models/core/workout';

export const savedWorkoutsMock: SavedWorkout[] = [
  {
    id: 'f3rtsg5',
    name: 'אימון רגליים קשוח',
    date: format(new Date(27, 12, 2023), 'dd.MM.yy'),
    savingDate: format(new Date(27, 12, 2023), 'dd.MM.yy'),
    exercises: [
      {
        categoryName: 'רגליים',
        data: [
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
    ],
  },
  {
    id: '45fs9oo',
    name: 'אימון גב כתפיים',
    date: format(new Date(22, 12, 2023), 'dd.MM.yy'),
    savingDate: format(new Date(22, 12, 2023), 'dd.MM.yy'),
    exercises: [
      {
        categoryName: 'רגליים',
        data: [
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
        ],
      },
      {
        categoryName: 'גב',
        data: [
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
    ],
  },
];
