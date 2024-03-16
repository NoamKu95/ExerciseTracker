import {ExerciseSaveType} from '../constants/enums';

export interface FilteringObject {
  builtInPeriod: string | undefined;
  startDate: Date | undefined;
  endDate: Date | undefined;
  exerciseType: ExerciseSaveType | undefined;
}
