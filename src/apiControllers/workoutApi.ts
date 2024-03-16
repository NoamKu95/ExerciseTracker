import axios from 'axios';
// Constants
import {paths} from '../constants/network/apiPaths';
// Models
import {CategorizedHistoryWorkouts, SavedWorkout} from '../models/core/workout';
import {historyWorkoutsMock} from '../mockData/historyWorkoutsMock';
import {savedWorkoutsMock} from '../mockData/savedWorkoutsMock';

export const fetchWorkoutHistoryApi = async (
  page: number,
  limit: number,
): Promise<CategorizedHistoryWorkouts[]> => {
  return historyWorkoutsMock;
  // return await axios.post(paths.WORKOUT_HISTORY, {page, limit});
};

// ** SAVED WORKOUTS **
export const fetchSavedWorkoutsApi = async (): Promise<SavedWorkout[]> => {
  return savedWorkoutsMock;
  // return await axios.post(paths.SAVED_WORKOUTS);
};

export const deleteSavedWorkoutApi = async (
  workoutID: string,
): Promise<SavedWorkout[]> => {
  return await axios.post(paths.DELETE_SAVED_WORKOUT, workoutID);
};
