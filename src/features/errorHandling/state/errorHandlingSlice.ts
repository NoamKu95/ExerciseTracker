import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppErrorTypes, ServerErrorTypes} from '../../../models/error';

export interface ErrorHandlingState {
  isError: boolean;
  errorType: ServerErrorTypes | AppErrorTypes | null;
  errorMessage: string | null;
}

const initialState: ErrorHandlingState = {
  isError: false,
  errorType: null,
  errorMessage: null,
};

export const ErrorHandlingSlice = createSlice({
  name: 'ErrorHandlingSlice',
  initialState,
  reducers: {
    setError: (
      state,
      action: PayloadAction<{
        type: ServerErrorTypes | AppErrorTypes;
        message: string;
      }>,
    ) => {
      const {type, message} = action.payload;
      // state.isError = !!type && !!message;
      // state.errorType = type || null;
      // state.errorMessage = message;
    },
    clearError: state => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      state = initialState;
    },
  },
});

export const {setError, clearError} = ErrorHandlingSlice.actions;
