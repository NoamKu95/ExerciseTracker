import {createAsyncThunk} from '@reduxjs/toolkit';
import {fetchWorkoutHistoryRepo} from '../../../repo/workoutRepo';
import {WorkoutHistoryPayload} from '../../../models/networkingObjects/payloads/workoutHistoryPayload';

interface WorkoutHistoryResponse {}

export const fetchWorkoutHistory = createAsyncThunk<
  WorkoutHistoryResponse,
  WorkoutHistoryPayload
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
