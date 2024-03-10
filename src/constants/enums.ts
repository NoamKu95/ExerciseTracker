export enum ButtonType {
  PRIMARY,
  SECONDARY,
  TEXT,
}

export enum AppStateStatus {
  ACTIVE = 'active',
  BACKGROUND = 'background',
  INACTIVE = 'inactive',
}

export enum DayPeriod {
  MORNING = 'morning',
  NOON = 'noon',
  EVENING = 'evening',
  NIGHT = 'night',
}

export enum DateSelectionType {
  START,
  END,
}

export enum Gender {
  FEMALE = 'female',
  MALE = 'male',
  OTHER = 'other',
}

export enum MeasureUnit {
  KG = 'Kg',
  LB = 'lbs',
}

export enum ExerciseSaveType {
  SAVED,
  NOT_SAVED,
}

export enum RowActionIdentifier {
  SAVED_WORKOUTS,
  WORKOUT_HISTORY,
  LANGUAGE,
  MEASURE_UNIT,
  CONTACT,
}
