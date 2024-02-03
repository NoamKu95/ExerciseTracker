import {I18nManager, NativeModules} from 'react-native';
import {LanguageType, Hebrew} from '../models/language';
import {SupportedLanguages} from '../constants/languages';
import {HE} from '../translations/i18n';
import {isIOS} from './platformUtil';

export const getDeviceLng = (): LanguageType => {
  let lng: string = LanguageType.English;

  if (isIOS()) {
    lng = NativeModules?.SettingsManager?.settings?.AppleLanguages[0] ?? lng;
  } else {
    lng = I18nManager.getConstants().localeIdentifier ?? lng;
  }

  if (isHebrew(lng)) {
    return LanguageType.Hebrew;
  } else {
    const languageCode = lng.substring(0, 2);
    return getLanguageType(languageCode);
  }
};

const isHebrew = (lng: string) => {
  return (
    lng.startsWith(Hebrew.HE) ||
    lng.startsWith(Hebrew.WI) ||
    lng.startsWith(Hebrew.IW) ||
    lng.startsWith(Hebrew.HE_IL)
  );
};

const getLanguageType = (languageCode: string): LanguageType => {
  switch (languageCode) {
    case 'he':
      return LanguageType.Hebrew;
    case 'en':
      return LanguageType.English;
    default:
      return LanguageType.Hebrew;
  }
};

export const isRightToLeft = (language: SupportedLanguages) => {
  const rtlLanguages = [HE];
  return rtlLanguages.includes(language) ? true : false;
};
