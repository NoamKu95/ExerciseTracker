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
  loginWithTokenRepo,
  sendNewPasswordRepo,
} from '../../../repo/authRepo';

// MARK: - Register
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

// MARK: - Login
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

export const loginUserViaToken = createAsyncThunk<User, string>(
  'auth/loginWithToken',
  async accessToken => {
    try {
      return await loginWithTokenRepo(accessToken);
    } catch (error) {
      throw error;
    }
  },
);

// MARK: - Forgot Password
export const sendNewPassword = createAsyncThunk<void, string>(
  'auth/forgotPassword',
  async email => {
    try {
      return await sendNewPasswordRepo(email);
    } catch (error) {
      throw error;
    }
  },
);

// MARK: - Refresh Token
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
