import {createAsyncThunk} from '@reduxjs/toolkit';
// Models
import {WorkoutHistoryPayload} from '../../../models/networkingObjects/payloads/workoutHistoryPayload';
// Redux
import {
  deleteSavedWorkoutRepo,
  fetchSavedWorkoutsRepo,
  fetchWorkoutHistoryRepo,
} from '../../../repo/workoutRepo';
import {
  CategorizedHistoryWorkouts,
  SavedWorkout,
} from '../../../models/core/workout';

// ** HISTORY WORKOUTS **
export const fetchWorkoutHistory = createAsyncThunk<
  CategorizedHistoryWorkouts[], // response
  WorkoutHistoryPayload // payload
>(
  'workout/fetchWorkoutHistory',
  async (payload: WorkoutHistoryPayload, thunkAPI) => {
    try {
      return await fetchWorkoutHistoryRepo(payload);
    } catch (error) {
      throw error;
    }
  },
);

// ** SAVED WORKOUTS **
export const fetchSavedWorkouts = createAsyncThunk<
  SavedWorkout[], // response
  void // payload
>('workout/fetchSavedWorkouts', async thunkAPI => {
  try {
    return await fetchSavedWorkoutsRepo();
  } catch (error) {
    throw error;
  }
});

export const deleteSavedWorkout = createAsyncThunk<
  SavedWorkout[], // response
  string // payload
>('workout/deleteSavedWorkout', async workoutID => {
  try {
    return await deleteSavedWorkoutRepo(workoutID);
  } catch (error) {
    throw error;
  }
});
