import {Platform, StatusBar} from 'react-native';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

// For safe area in android
export const statusBarHeight = isIOS() ? 0 : StatusBar.currentHeight;
