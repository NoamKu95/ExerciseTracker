import {createSlice} from '@reduxjs/toolkit';
// Constants
import {exerciseLastMonthData} from '../../../mockData/exerciseDataMock';
import {defaultBodyArea, defaultExercise} from '../../../data/defaultData';
// Models
import {ExerciseDayData} from '../../../models/core/exercise';
import {BodyArea} from '../../../models/bodyArea';
import {ExerciseResponse} from '../../../models/networkingObjects/exerciseResponse';

export interface WorkoutState {
  isLoading: boolean;
  chosenExercise: ExerciseResponse;
  chosenBodyArea: BodyArea;
  exerciseData: ExerciseDayData[];
}

const initialState: WorkoutState = {
  isLoading: false,
  chosenExercise: defaultExercise,
  chosenBodyArea: defaultBodyArea,
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
