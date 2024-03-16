import {createAsyncThunk} from '@reduxjs/toolkit';
import {ExerciseProgressPayload} from '../../../models/networkingObjects/payloads/exerciseProgressPayload';
import {ExerciseProgressResponse} from '../../../models/networkingObjects/responses/exerciseResponse';
import {fetchProgressDataRepo} from '../../../repo/progressRepo';

// ** PROGRESS **
export const fetchProgressData = createAsyncThunk<
  ExerciseProgressResponse,
  ExerciseProgressPayload
>(
  'progress/fetchProgress',
  async (payload: ExerciseProgressPayload, thunkAPI) => {
    try {
      return await fetchProgressDataRepo(payload);
    } catch (error) {
      throw error;
    }
  },
);
