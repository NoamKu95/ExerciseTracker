import {StyleSheet} from 'react-native';
import {colors} from './colors';

export const shadowStyles = StyleSheet.create({
  softShadow: {
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  mediumShadow: {
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
  },
  hardShadow: {
    shadowColor: colors.BLACK,
    shadowOffset: {width: 0, height: 6},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
  },
});
