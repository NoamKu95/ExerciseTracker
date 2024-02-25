import {isIOS} from '../../utils/platformUtil';

export const fontFamilies = {
  RUBIK: {
    normal: isIOS() ? 'Rubik-Regular' : 'RubikRegular',
    medium: isIOS() ? 'Rubik-Medium' : 'RubikMedium',
    bold: isIOS() ? 'Rubik-Bold' : 'RubikBold',
  },
  MONTSERRAT: {
    normal: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
    bold: isIOS() ? 'Montserrat-Bold' : 'MontserratBold',
  },
};

export const FontSizes = {
  xsmall: 12,
  small: 14,
  regular: 18,
  medium: 20,
  large: 24,
};
