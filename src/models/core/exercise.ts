export interface Exercise {
  id: string;
  name: string;
  lastWeight: number;
  averageWeight: number;
  maxWeight: number;
}

export interface ExerciseDayData {
  date: Date;
  weight: number;
}
