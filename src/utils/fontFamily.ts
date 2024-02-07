import {fontFamilies} from '../constants/ui/fonts';

export const getFontFamily = (
  isRTL: boolean,
  weight: 'normal' | 'medium' | 'bold',
) => {
  const selectedFontFamily = isRTL
    ? fontFamilies.RUBIK
    : fontFamilies.MONTSERRAT;
  return selectedFontFamily[weight];
};
