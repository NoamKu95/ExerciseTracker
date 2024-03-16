import {exercises} from '../data/exercises';
import {Exercise} from '../models/core/exercise';
import {
  CategorizedHistoryWorkouts,
  HistoryWorkout,
} from '../models/core/workout';

export const findExerciseByName = (name: string): Exercise | undefined => {
  //   let exercises = useAppSelector(state => state.workout.exercises);
  let array = exercises;
  return array.find(exercise => exercise.name === name);
};

export const findWorkoutInCategorizedHistory = (
  workoutID: string,
  historyWorkouts: CategorizedHistoryWorkouts[],
): HistoryWorkout | undefined => {
  let currentWorkout: HistoryWorkout | undefined;
  for (const categorizedWorkouts of historyWorkouts) {
    const workout = categorizedWorkouts.data.find(w => w.id === workoutID);
    if (workout) {
      currentWorkout = workout;
      return;
    }
  }
  return currentWorkout;
};
