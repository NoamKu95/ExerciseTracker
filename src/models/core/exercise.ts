import {DayPeriod} from '../../constants/enums';

export interface Exercise {
  id: string;
  name: string;
}

export interface ExerciseDayData {
  date: Date;
  weight: number;
}

export interface HistoryExercise {
  id: string;
  date: string;
  time: DayPeriod;
  name: string;
}
