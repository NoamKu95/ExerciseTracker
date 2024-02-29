import {Action, ThunkAction, configureStore} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
// Slices
import {AuthSlice} from '../features/auth/state/authSlice';
import {WorkoutSlice} from '../features/home_page/state/workoutSlice';
import {ProgressSlice} from '../features/progress/state/progressSlice';
import {ErrorHandlingSlice} from '../features/errorHandling/state/errorHandlingSlice';

const store = configureStore({
  reducer: {
    auth: AuthSlice.reducer,
    workout: WorkoutSlice.reducer,
    progress: ProgressSlice.reducer,
    errorHandling: ErrorHandlingSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
