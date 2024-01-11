import {Fonts} from '../constants/ui/fonts';

export const getFontFamily = (
  isRTL: boolean,
  weight: 'normal' | 'medium' | 'bold',
) => {
  switch (weight) {
    case 'normal':
      return isRTL ? Fonts.MONTSERRAT : Fonts.RUBIK;
    case 'medium':
      return isRTL ? Fonts.MONTSERRAT_MEDIUM : Fonts.RUBIK_MEDIUM;
    case 'bold':
      return isRTL ? Fonts.MONTSERRAT_BOLD : Fonts.RUBIK_BOLD;
  }
};
