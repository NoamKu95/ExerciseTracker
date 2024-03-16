export interface ExerciseProgressResponse {
  id: string;
  name: string;
  lastWeight: number;
  averageWeight: number;
  maxWeight: number;
  graphData: ExerciseDayData[];
}

export interface ExerciseDayData {
  date: string;
  weight: number;
}
