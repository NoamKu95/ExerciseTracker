import {
  KeyChainKeys,
  getFromKeychain,
  saveToKeychain,
} from '../managers/keychainManager';
// Constants
import {User, UserCredentials, RegistrationObject} from '../models/core/user';
// Redux
import {
  loginApi,
  loginWithTokenApi,
  refreshAccessTokenApi,
  registerApi,
  sendNewPasswordApi,
} from '../apiControllers/authApi';

// MARK: - Register
export const registerRepo = async (
  registrationObject: RegistrationObject,
): Promise<void> => {
  const {accessToken, refreshToken} = await registerApi(registrationObject);
  await saveTokensToKeychain(accessToken, refreshToken);
  return;
};

// MARK: - Login
export const loginRepo = async (
  credentials: UserCredentials,
): Promise<{user: User; accessToken: string}> => {
  const {accessToken, refreshToken, user} = await loginApi(credentials);
  await saveTokensToKeychain(accessToken, refreshToken);
  return {user, accessToken};
};

export const loginWithTokenRepo = async (
  accessToken: string,
): Promise<User> => {
  const user = await loginWithTokenApi(accessToken);
  return user;
};

// MARK: - Forgot Password
export const sendNewPasswordRepo = async (email: string): Promise<void> => {
  return await sendNewPasswordApi(email);
};

// MARK: - Refresh Token
export const refreshAccessTokenRepo = async (): Promise<string> => {
  const refreshToken = await getFromKeychain(KeyChainKeys.REFRESH_TOKEN);
  const {newAccessToken, newRefreshToken} = await refreshAccessTokenApi(
    refreshToken,
  );
  await saveTokensToKeychain(newAccessToken, newRefreshToken);
  return newAccessToken;
};

const saveTokensToKeychain = async (
  accessToken: string,
  refreshToken: string,
) => {
  await Promise.all([
    saveToKeychain(KeyChainKeys.ACCESS_TOKEN, accessToken),
    saveToKeychain(KeyChainKeys.REFRESH_TOKEN, refreshToken),
  ]);
};
