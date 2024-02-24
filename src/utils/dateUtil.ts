import i18n from '../translations/i18n';

// MARK: Timestamps
export const getNowTimestamp = (): number => {
  return Math.floor(Date.now() / 1000);
};

export const getXDaysAgoTimestamp = (daysToSubtract: number): number => {
  return Math.floor((Date.now() - daysToSubtract * 24 * 60 * 60 * 1000) / 1000);
};

export const getGreetingByCurrentHour = (): string => {
  const hours = new Date().getHours();
  if (hours > 4 && hours < 12) {
    return i18n.t('screens.home.greetings.morning');
  } else if (hours > 12 && hours < 18) {
    return i18n.t('screens.home.greetings.noon');
  } else if (hours > 18 && hours < 23) {
    return i18n.t('screens.home.greetings.evening');
  } else {
    return i18n.t('screens.home.greetings.night');
  }
};

export const getMotivationPhraseByCurrentHour = (): string => {
  const hours = new Date().getHours();
  if (hours > 4 && hours < 12) {
    return i18n.t('screens.home.motivation.morning');
  } else if (hours > 12 && hours < 18) {
    return i18n.t('screens.home.motivation.noon');
  } else if (hours > 18 && hours < 23) {
    return i18n.t('screens.home.motivation.evening');
  } else {
    return i18n.t('screens.home.motivation.night');
  }
};
