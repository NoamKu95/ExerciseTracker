import {Exercise} from './exercise';

export interface Workout {
  id: string;
  name: string;
  date: Date;
  exercises?: Exercise[];
}
