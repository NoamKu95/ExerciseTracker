import AsyncStorage from '@react-native-async-storage/async-storage';
import {logger} from './loggingManager';

export const enum LocalStorageKeys {
  IS_FIRST_LOGIN = 'isFirstLogin',
  HAS_SEEN_ONBOARDING = 'hasSeenOnboarding',
  IS_FIRST_APP_LOAD = 'isFirstAppLoad',
}

export const setItemInLocalStorage = async (
  key: LocalStorageKeys,
  value: string | number | boolean,
): Promise<void> => {
  const stringValue = JSON.stringify(value);
  await AsyncStorage.setItem(key, stringValue);
};

export const getItemFromLocalStorage = async (
  key: LocalStorageKeys,
): Promise<string | number | boolean | null> => {
  try {
    const stringValue = await AsyncStorage.getItem(key);
    return stringValue != null ? (JSON.parse(stringValue) as any) : null;
  } catch (error) {
    logger.error(`Error getting ${key} from local storage`);
    return null;
  }
};

export const removeItemFromLocalStorage = async (
  key: LocalStorageKeys,
): Promise<void> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    logger.error(`Error removing ${key} from local storage`);
  }
};
