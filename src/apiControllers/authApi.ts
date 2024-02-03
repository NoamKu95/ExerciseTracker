import axios from '../managers/networkManager';
// Constants
import {paths} from '../constants/network/apiPaths';
// Models
import {User, UserCredentials, RegistrationObject} from '../models/core/user';
// Mocks
import {mockUser} from '../mockData/userMock';

export const registerApi = async (
  registrationObject: RegistrationObject,
): Promise<{accessToken: string; refreshToken: string}> => {
  const response = await axios.post(paths.REGISTER, registrationObject);
  const {accessToken, refreshToken} = response.data;
  return {accessToken, refreshToken};
};

export const getUserApi = async (): Promise<User> => {
  //   const response = await axios.post(paths.GET_USER);
  //   return response.data;
  return mockUser;
};

export const loginApi = async (
  credentials: UserCredentials,
): Promise<{accessToken: string; refreshToken: string; user: User}> => {
  const response = await axios.post(paths.LOGIN, credentials);
  const {accessToken, refreshToken, user} = response.data;
  return {accessToken, refreshToken, user};
};
