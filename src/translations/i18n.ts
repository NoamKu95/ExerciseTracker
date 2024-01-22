import {I18nManager, NativeModules} from 'react-native';
import {I18n} from 'i18n-js';
import he from './he';
import en from './en';
import {isIOS} from '../utils/platformUtil';

export const HE = 'he';
export const EN = 'en';

const i18n = new I18n({
  en,
  he,
});
i18n.enableFallback = true;

export const findLng = () => {
  let lng = HE;
  if (!isIOS()) {
    lng = I18nManager.getConstants().localeIdentifier ?? HE;
  } else {
    lng = NativeModules?.SettingsManager?.settings?.AppleLanguages[0];
  }
  if (isHebrew(lng)) {
    return HE;
  }
  return HE;
  // return lng;
};

const isHebrew = (lng: string) => {
  return (
    lng.startsWith(Hebrew.HE) ||
    lng.startsWith(Hebrew.WI) ||
    lng.startsWith(Hebrew.IW) ||
    lng.startsWith(Hebrew.HE_IL)
  );
};

export enum Hebrew {
  WI = 'wi',
  IW = 'iw',
  HE = 'he',
  HE_IL = 'he-IL',
}

i18n.locale = findLng();
export default i18n;
