import store from '../store/store';
import {Dimensions} from 'react-native';

export const hp = (percent: number) => {
  return Dimensions.get('screen').height * (percent / 100);
};
export const wp = (percent: number) => {
  return Dimensions.get('screen').width * (percent / 100);
};

export const getTextAlign = () => {
  // const isRTL = store.getState().auth.isRTL;
  // return isRTL ? 'left' : 'right';
};

export const getFlexDirection = () => {
  // const isRTL = store.getState().auth.isRTL;
  // return isRTL ? 'row-reverse' : 'row';
};
