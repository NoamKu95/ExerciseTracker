import * as Keychain from 'react-native-keychain';
import {logger} from './loggingManager';
import {keychainServicePrefix} from '../constants/misc';

export const numOfBlockMinutes = 10;

export const enum KeyChainKeys {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
  PASSWORD = 'password',
}

export const saveToKeychain = async (
  key: KeyChainKeys,
  value: any,
): Promise<void> => {
  const valueString = JSON.stringify(value);
  await Keychain.setGenericPassword(key, valueString, {
    service: `${keychainServicePrefix}${key}`,
  });
};

export const getFromKeychain = async (
  key: KeyChainKeys,
): Promise<any | null> => {
  try {
    const credentials = await Keychain.getGenericPassword({
      service: `${keychainServicePrefix}${key}`,
    });

    if (credentials) {
      return JSON.parse(credentials.password);
    }
  } catch (error) {
    logger.error(`Error getting ${key} from keychain`);
  }
  return null;
};

export const removeFromKeychain = async (key: KeyChainKeys): Promise<void> => {
  try {
    await Keychain.resetGenericPassword({
      service: `${keychainServicePrefix}${key}`,
    });
  } catch (error) {
    logger.error(`Error removing ${key} from keychain`);
  }
};

export const saveUserTokens = async (
  accessToken: string,
  refreshToken: string,
) => {
  await saveToKeychain(KeyChainKeys.ACCESS_TOKEN, accessToken);
  await saveToKeychain(KeyChainKeys.REFRESH_TOKEN, refreshToken);
};
