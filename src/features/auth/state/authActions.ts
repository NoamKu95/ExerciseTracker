import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  User,
  UserCredentials,
  RegistrationObject,
} from '../../../models/core/user';
import {registerRepo, loginRepo} from '../../../repo/authRepo';

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
