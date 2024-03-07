import {createSlice} from '@reduxjs/toolkit';
// Constants
// Models
import {Workout} from '../../../models/core/workout';
import {savedWorkoutsMock} from '../../../mockData/savedWorkoutsMock';
// Redux

export interface WorkoutState {
  savedWorkouts: Workout[];
  activeWorkout: Workout | null;
  isLoading: boolean;
}

const initialState: WorkoutState = {
  savedWorkouts: savedWorkoutsMock, // TODO: - replace with []
  activeWorkout: null,
  isLoading: false,
};

export const WorkoutSlice = createSlice({
  name: 'WorkoutState',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
  },
});

export const {} = WorkoutSlice.actions;
