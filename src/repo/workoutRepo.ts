import {WorkoutHistoryPayload} from '../models/networkingObjects/payloads/workoutHistoryPayload';
// Models
import {CategorizedHistoryWorkouts, SavedWorkout} from '../models/core/workout';
// Redux
import {
  deleteSavedWorkoutApi,
  fetchSavedWorkoutsApi,
  fetchWorkoutHistoryApi,
} from '../apiControllers/workoutApi';

// ** HISTORY WORKOUTS **
export const fetchWorkoutHistoryRepo = async (
  payload: WorkoutHistoryPayload, // payload
): Promise<CategorizedHistoryWorkouts[]> => {
  return await fetchWorkoutHistoryApi(payload.page, payload.limit);
};

// ** SAVED WORKOUTS **
export const fetchSavedWorkoutsRepo = async (): Promise<SavedWorkout[]> => {
  return await fetchSavedWorkoutsApi();
};

export const deleteSavedWorkoutRepo = async (
  workoutID: string, // payload
): Promise<SavedWorkout[]> => {
  return await deleteSavedWorkoutApi(workoutID);
  // return await fetchSavedWorkoutsRepo(); // TODO: uncomment once BE exists ; currently removing done in deleteSavedWorkoutApi
};
