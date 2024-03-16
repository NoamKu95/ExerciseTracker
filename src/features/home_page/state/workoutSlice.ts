import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// Constants
// Models
import {
  CategorizedHistoryWorkouts,
  SavedWorkout,
  StateWorkout,
  Workout,
} from '../../../models/core/workout';
import {fetchSavedWorkouts, fetchWorkoutHistory} from './workoutActions';
import {RootState} from '../../../store/store';
// Redux

export interface WorkoutState {
  activeWorkout: StateWorkout | null;
  savedWorkouts: StateWorkout[];
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
          const serializedWorkouts = action.payload.map(workout => ({
            ...workout,
            date: workout.date.toISOString(),
            savingDate: workout.savingDate.toISOString(),
          }));
          state.isLoading = false;
          state.savedWorkouts = serializedWorkouts;
        },
      );
  },
});

export const {} = WorkoutSlice.actions;

export const getStateSavedWorkouts = (state: RootState) => {
  const serializedWorkouts = state.workout.savedWorkouts;
  const deserializedWorkouts = serializedWorkouts.map(deserializeWorkout);
  return deserializedWorkouts;
};

export const deserializeWorkout = (
  serializedWorkout: StateWorkout,
): Workout => {
  return {
    ...serializedWorkout,
    date: new Date(serializedWorkout.date),
  } as Workout;
};
