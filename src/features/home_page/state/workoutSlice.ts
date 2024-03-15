import {createSlice} from '@reduxjs/toolkit';
// Constants
import {savedWorkoutsMock} from '../../../mockData/savedWorkoutsMock';
// Models
import {
  CategorizedHistoryWorkouts,
  Workout,
} from '../../../models/core/workout';
import {historyWorkoutsMock} from '../../../mockData/historyWorkoutsMock';
// Redux

export interface WorkoutState {
  savedWorkouts: Workout[];
  activeWorkout: Workout | null;
  pastWorkouts: CategorizedHistoryWorkouts[];
  page: number;
  didFinishFetchingAllHistory: boolean;
  isLoading: boolean;
}

const initialState: WorkoutState = {
  savedWorkouts: savedWorkoutsMock, // TODO: - replace with []
  activeWorkout: null,
  pastWorkouts: historyWorkoutsMock, // TODO: - replace with []
  page: 0,
  didFinishFetchingAllHistory: false,
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
