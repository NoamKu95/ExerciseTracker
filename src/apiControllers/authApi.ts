import axios from '../managers/networkManager';
// Constants
import {paths} from '../constants/network/apiPaths';
// Models
import {User, UserCredentials, RegistrationObject} from '../models/core/user';
// Mocks
import {mockUser} from '../mockData/userMock';

// MARK: - Register
export const registerApi = async (
  registrationObject: RegistrationObject,
): Promise<{accessToken: string; refreshToken: string}> => {
  const response = await axios.post(paths.REGISTER, registrationObject);
  const {accessToken, refreshToken} = response.data;
  return {accessToken, refreshToken};
};

// MARK: - Login
export const loginApi = async (
  credentials: UserCredentials,
): Promise<{accessToken: string; refreshToken: string; user: User}> => {
  const response = await axios.post(paths.LOGIN, credentials);
  const {accessToken, refreshToken, user} = response.data;
  return {accessToken, refreshToken, user};
};

export const loginWithTokenApi = async (accessToken: string): Promise<User> => {
  const user: User = await axios.post(paths.LOGIN_WITH_TOKEN, accessToken);
  return user;
};

// Forgot Password
export const sendNewPasswordApi = async (email: string): Promise<void> => {
  return await axios.post(paths.FORGOT_PASSWORD, email);
};

// MARK: - Get Data
export const getUserApi = async (): Promise<User> => {
  //   const response = await axios.post(paths.GET_USER);
  //   return response.data;
  return mockUser;
};

// MARK: - Refresh Token
export const refreshAccessTokenApi = async (
  refreshToken: string,
): Promise<{newAccessToken: string; newRefreshToken: string}> => {
  const response = await axios.post(paths.REFRESH_ACCESS_TOKEN, refreshToken);
  const {newAccessToken, newRefreshToken} = response.data;
  return {newAccessToken, newRefreshToken};
};
