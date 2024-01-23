import {Fonts} from '../constants/ui/fonts';

export const getFontFamily = (
  isRTL: boolean,
  weight: 'normal' | 'medium' | 'bold',
) => {
  switch (weight) {
    case 'normal':
      return isRTL ? Fonts.RUBIK : Fonts.MONTSERRAT;
    case 'medium':
      return isRTL ? Fonts.RUBIK_MEDIUM : Fonts.MONTSERRAT_MEDIUM;
    case 'bold':
      return isRTL ? Fonts.RUBIK_BOLD : Fonts.MONTSERRAT_BOLD;
  }
};
