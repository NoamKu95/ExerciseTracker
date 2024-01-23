import {SupportedLanguages} from '../constants/languages';
import {HE} from '../translations/he';
import i18n from '../translations/i18n';

const rtlLanguages = [HE];

const isRightToLeft = (language: SupportedLanguages) => {
  return rtlLanguages.includes(language) ? true : false;
};

export const isRTLLanguage = () => {
  return rtlLanguages.includes(i18n.locale) ? true : false;
};

export default isRightToLeft;
