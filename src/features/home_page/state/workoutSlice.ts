import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// Constants
// Models
import {
  CategorizedHistoryWorkouts,
  SavedWorkout,
  Workout,
} from '../../../models/core/workout';
import {
  deleteSavedWorkout,
  fetchSavedWorkouts,
  fetchWorkoutHistory,
} from './workoutActions';
// Redux

export interface WorkoutState {
  activeWorkout: Workout | null;
  savedWorkouts: SavedWorkout[];
  pastWorkouts: CategorizedHistoryWorkouts[];
  page: number;
  didFinishFetchingAllHistory: boolean;
  isLoading: boolean;
}

const initialState: WorkoutState = {
  activeWorkout: null,
  savedWorkouts: [],
  pastWorkouts: [],
  page: 0,
  didFinishFetchingAllHistory: false,
  isLoading: false,
};

export const WorkoutSlice = createSlice({
  name: 'WorkoutState',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // ** HISTORY WORKOUTS **
      .addCase(fetchWorkoutHistory.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchWorkoutHistory.rejected, state => {
        state.isLoading = false;
      })
      .addCase(
        fetchWorkoutHistory.fulfilled,
        (state, action: PayloadAction<CategorizedHistoryWorkouts[]>) => {
          state.isLoading = false;
          state.pastWorkouts = action.payload;
        },
      )
      // ** SAVED WORKOUTS **
      .addCase(fetchSavedWorkouts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchSavedWorkouts.rejected, state => {
        state.isLoading = false;
      })
      .addCase(
        fetchSavedWorkouts.fulfilled,
        (state, action: PayloadAction<SavedWorkout[]>) => {
          state.isLoading = false;
          state.savedWorkouts = action.payload;
        },
      )
      .addCase(deleteSavedWorkout.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteSavedWorkout.rejected, state => {
        state.isLoading = false;
      })
      .addCase(
        deleteSavedWorkout.fulfilled,
        (state, action: PayloadAction<SavedWorkout[]>) => {
          state.isLoading = false;
          state.savedWorkouts = action.payload;
          console.log(action.payload);
        },
      );
  },
});

export const {} = WorkoutSlice.actions;
