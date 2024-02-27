import {createSlice} from '@reduxjs/toolkit';
// Constants
import {exerciseLastMonthData} from '../../../mockData/exerciseDataMock';
// Models
import {Exercise, ExerciseDayData} from '../../../models/core/exercise';
// Redux

export interface WorkoutState {
  isLoading: boolean;
  chosenExercise: Exercise | null;
  exerciseData: ExerciseDayData[];
}

const initialState: WorkoutState = {
  isLoading: false,
  chosenExercise: {
    id: '',
    name: '',
    lastWeight: 60,
    averageWeight: 55,
    maxWeight: 62.5,
  },
  exerciseData: exerciseLastMonthData, // TODO: replace with []
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
