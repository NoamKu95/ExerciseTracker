export interface Exercise {
  id: string;
  name: string;
  sets?: Set[];
}

export interface Set {
  weight?: number;
  reps: number;
}
