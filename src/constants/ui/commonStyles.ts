import {colors} from './colors';
import {shadowStyles} from './shadows';
import {spaces} from './spaces';

export const TAB_BAR_HEIGHT = 85;

export const tabBarStyle = [
  {
    paddingTop: spaces._16px,
    backgroundColor: colors.WHITE,
    height: TAB_BAR_HEIGHT,
  },
  shadowStyles.mediumShadow,
];
