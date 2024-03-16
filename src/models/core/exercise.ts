export interface Exercise {
  id: string;
  name: string;
  sets?: Set[];
}

export interface Set {
  weight?: number;
  reps: number;
}

// ------------------------------------------------------------------

// Data model for progress graph of specific exercise
export interface ExerciseDayData {
  date: Date;
  weight: number;
}
