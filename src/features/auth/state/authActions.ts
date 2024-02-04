import {createAsyncThunk} from '@reduxjs/toolkit';
// Models
import {
  User,
  UserCredentials,
  RegistrationObject,
} from '../../../models/core/user';
// Redux
import {
  registerRepo,
  loginRepo,
  refreshAccessTokenRepo,
} from '../../../repo/authRepo';

export const registerUser = createAsyncThunk<void, RegistrationObject>(
  'auth/registerUser',
  async registrationObject => {
    try {
      return await registerRepo(registrationObject);
    } catch (error) {
      throw error;
    }
  },
);

export const loginUser = createAsyncThunk<
  {user: User; accessToken: string},
  UserCredentials
>('auth/loginUser', async credentials => {
  try {
    return await loginRepo(credentials);
  } catch (error) {
    throw error;
  }
});

export const refreshAccessToken = createAsyncThunk<string, void>(
  'auth/refreshAccessToken',
  async () => {
    try {
      return await refreshAccessTokenRepo();
    } catch (error) {
      throw error;
    }
  },
);
