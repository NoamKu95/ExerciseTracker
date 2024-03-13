import {DayPeriod} from '../../constants/enums';

export interface Exercise {
  id: string;
  name: string;
}

export interface ExerciseDayData {
  date: Date;
  weight: number;
}

export interface HistoryWorkout {
  id: string;
  date: Date;
  time: DayPeriod;
  name: string;
  exercises: {title: string; data: WorkoutSection[]}[];
}

export interface Set {
  weight: number;
  reps: number;
}

export interface WorkoutSection {
  sectionTitle: string;
  sectionExercises: {id: string; name: string; sets: Set[]}[];
}
