import {createSlice} from '@reduxjs/toolkit';
// Constants
// Models
import {Exercise} from '../../../models/core/exercise';
// Redux

export interface WorkoutState {
  chosenExercise: Exercise | null;
}

const initialState: WorkoutState = {
  chosenExercise: {
    id: '',
    name: '',
    lastWeight: 60,
    averageWeight: 55,
    maxWeight: 62.5,
  },
};

export const ProgressSlice = createSlice({
  name: 'ProgressSlice',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
  },
});

export const {} = ProgressSlice.actions;
