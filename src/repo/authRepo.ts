import {loginApi, registerApi} from '../apiControllers/authApi';
import {KeyChainKeys, saveToKeychain} from '../managers/keychainManager';
import {User, UserCredentials, RegistrationObject} from '../models/core/user';

export const registerRepo = async (
  registrationObject: RegistrationObject,
): Promise<void> => {
  const {accessToken, refreshToken} = await registerApi(registrationObject);
  await saveTokensToKeychain(accessToken, refreshToken);
  return;
};

export const loginRepo = async (
  credentials: UserCredentials,
): Promise<{user: User; accessToken: string}> => {
  const {accessToken, refreshToken, user} = await loginApi(credentials);
  await saveTokensToKeychain(accessToken, refreshToken);
  return {user, accessToken};
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
