import {DayPeriod} from '../../constants/enums';
import {Exercise} from './exercise';

export interface Workout {
  id: string;
  name: string;
  date: Date;
  exercises?: CategorizedExercises[];
}

// HISTORY WORKOUTS
export interface CategorizedHistoryWorkouts {
  categoryName: string; // title
  workouts: HistoryWorkout[]; // data
}

export interface CategorizedExercises {
  categoryName: string;
  data: Exercise[];
}

export interface HistoryWorkout extends Workout {
  time: DayPeriod;
}

// SAVED WORKOUTS
export interface CategorizedSavedWorkouts {
  categoryName: string;
  workouts: SavedWorkout[];
}
export interface SavedWorkout extends Workout {
  savingDate: Date;
}

// ------------------------------------------------------------------
