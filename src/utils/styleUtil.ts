import {Dimensions} from 'react-native';
import store from '../store/store';

export const hp = (percent: number) => {
  return Dimensions.get('screen').height * (percent / 100);
};
export const wp = (percent: number) => {
  return Dimensions.get('screen').width * (percent / 100);
};

export const getTextAlign = (): 'left' | 'right' => {
  // const isRTL = store.getState().auth.isRTL;
  // return isRTL ? 'left' : 'right';
  return 'right';
};

export const getWritingDirection = (): 'rtl' | 'ltr' => {
  // const isRTL = store.getState().auth.isRTL;
  // return isRTL ? 'rtl' : 'ltr';
  return 'rtl';
};

export const getFlexDirection = () => {
  const isRTL = true; // store.getState().auth.isRTL;
  return isRTL ? 'row-reverse' : 'row';
};

export const getOpposingFlexDirection = () => {
  const isRTL = true; // store.getState().auth.isRTL;
  return isRTL ? 'row' : 'row-reverse';
};

export const getIconDirection = (): '180deg' | '0deg' => {
  const isRTL = true; // store.getState().auth.isRTL;
  return isRTL ? '180deg' : '0deg';
};

export const getSelfAlign = (): 'flex-end' | 'flex-start' => {
  const isRTL = true; // store.getState().auth.isRTL;
  return isRTL ? 'flex-end' : 'flex-start';
};
