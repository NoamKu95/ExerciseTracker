import {I18nManager, NativeModules} from 'react-native';
import {I18n} from 'i18n-js';
import he from './he';
import en from './en';
import {isIOS} from '../utils/platformUtil';
import {FlagAmerica, FlagIsrael} from '../constants/ui/images';

export const HE = 'he';
export const EN = 'en';

// MARK: - enums & models
export enum LanguageType {
  English = EN,
  Hebrew = HE,
}

export interface Language {
  code: LanguageType;
  name: string;
  flag: string;
}

export enum Hebrew {
  WI = 'wi',
  IW = 'iw',
  HE = 'he',
  HE_IL = 'he-IL',
}

const i18n = new I18n({
  en,
  he,
});
i18n.enableFallback = true;

// MARK: - Find language
export const getDeviceLng = (): LanguageType => {
  let lng: string | undefined = LanguageType.Hebrew;

  if (isIOS()) {
    lng = NativeModules?.SettingsManager?.settings?.AppleLanguages[0] ?? lng;
  } else {
    lng = I18nManager.getConstants().localeIdentifier ?? lng;
  }

  if (lng && isHebrew(lng)) {
    return LanguageType.Hebrew;
  } else {
    const languageCode = lng?.substring(0, 2);
    return languageCode ? getLanguageType(languageCode) : LanguageType.Hebrew;
  }
};

export const getLanguageType = (languageCode: string): LanguageType => {
  switch (languageCode) {
    case 'he':
      return LanguageType.Hebrew;
    case 'en':
      return LanguageType.English;
    default:
      return LanguageType.Hebrew;
  }
};

i18n.locale = getDeviceLng();
export default i18n;

// MARK: - Utils
export const isHebrew = (lng: string) => {
  return (
    lng.startsWith(Hebrew.HE) ||
    lng.startsWith(Hebrew.WI) ||
    lng.startsWith(Hebrew.IW) ||
    lng.startsWith(Hebrew.HE_IL)
  );
};

export const isRightToLeft = (language: LanguageType): boolean => {
  const rtlLanguages = [LanguageType.Hebrew];
  return rtlLanguages.includes(language);
};

export const appLanguages: Language[] = [
  {code: LanguageType.English, name: 'English', flag: FlagAmerica},
  {code: LanguageType.Hebrew, name: 'עברית', flag: FlagIsrael},
];
