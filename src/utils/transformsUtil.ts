import {Gender} from '../constants/enums';
import i18n from '../translations/i18n';

export function translateIntoGender(gender: string): Gender {
  switch (gender) {
    case i18n.t('screens.profile.female'):
      return Gender.FEMALE;
    case i18n.t('screens.profile.male'):
      return Gender.MALE;
    case i18n.t('screens.profile.other'):
      return Gender.OTHER;
    default:
      throw new Error('Unknown gender');
  }
}
