import i18n from '../translations/i18n';
import {DayPeriod} from '../constants/enums';

// MARK: Timestamps
export const getNowTimestamp = (): number => {
  return Math.floor(Date.now() / 1000);
};

export const getXDaysAgoTimestamp = (daysToSubtract: number): number => {
  return Math.floor((Date.now() - daysToSubtract * 24 * 60 * 60 * 1000) / 1000);
};

const getDayPeriod = (hours: number): DayPeriod => {
  if (hours >= 4 && hours < 12) {
    return DayPeriod.MORNING;
  } else if (hours >= 12 && hours < 18) {
    return DayPeriod.NOON;
  } else if (hours >= 18 && hours < 23) {
    return DayPeriod.EVENING;
  } else {
    return DayPeriod.NIGHT;
  }
};

export const getGreetingAndMotivationByCurrentHour = (): {
  greeting: string;
  motivation: string;
} => {
  const hours = new Date().getHours();
  const dayPeriod = getDayPeriod(hours);

  const greetingKey = `screens.home.greetings.${dayPeriod}`;
  const motivationKey = `screens.home.motivation.${dayPeriod}`;

  return {
    greeting: i18n.t(greetingKey),
    motivation: i18n.t(motivationKey),
  };
};
