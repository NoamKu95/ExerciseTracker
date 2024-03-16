import {PayloadAction, createSlice} from '@reduxjs/toolkit';
// Constants
import {defaultBodyArea, defaultExercise} from '../../../data/defaultData';
// Models
import {BodyArea} from '../../../models/bodyArea';
import {Exercise} from '../../../models/core/exercise';
import {ExerciseProgressResponse} from '../../../models/networkingObjects/responses/exerciseResponse';
// Redux
import {fetchProgressData} from './progressActions';

export interface WorkoutState {
  isLoading: boolean;
  chosenExercise: Exercise;
  chosenBodyArea: BodyArea;
  exerciseProgress: ExerciseProgressResponse | null;
}

const initialState: WorkoutState = {
  isLoading: false,
  chosenExercise: defaultExercise,
  chosenBodyArea: defaultBodyArea,
  exerciseProgress: null,
};

export const ProgressSlice = createSlice({
  name: 'ProgressSlice',
  initialState,
  reducers: {
    setSelectedExercise(
      state,
      action: PayloadAction<{exercise: Exercise; bodyArea: BodyArea}>,
    ) {
      state.chosenExercise = action.payload.exercise;
      state.chosenBodyArea = action.payload.bodyArea;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchProgressData.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProgressData.rejected, state => {
        state.isLoading = false;
      })
      .addCase(
        fetchProgressData.fulfilled,
        (state, action: PayloadAction<ExerciseProgressResponse>) => {
          state.isLoading = false;
          state.exerciseProgress = action.payload;
        },
      );
  },
});

export const {setSelectedExercise} = ProgressSlice.actions;
