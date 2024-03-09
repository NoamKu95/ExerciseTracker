import {Exercise} from '../../core/exercise';

export interface ExerciseResponse extends Exercise {
  lastWeight: number;
  averageWeight: number;
  maxWeight: number;
}
