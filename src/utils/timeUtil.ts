import {format, isToday, subDays} from 'date-fns';
import i18n from '../translations/i18n';
import {TimePeriod} from '../models/timePeriod';

/**
 * Converts a Date object into a textual representation, such as "today", "yesterday", or "d MMM" format.
 */
export const formatDateToText = (date: Date) => {
  // eslint-disable-next-line curly
  if (isToday(date)) return i18n.t('common.today');
  return format(date, 'd MMM');
};

/**
 * Returns a textual representation of a period based on the current date and amount of days.
 * The text format varies depending on the length of the period.
 */
export const getPeriodInTextFormat = (
  period: TimePeriod,
  currentDate: Date,
) => {
  if (period.amountOfDays === 1) {
    return formatDateToText(currentDate);
  }

  return formatTimePeriod(currentDate, period.amountOfDays);
};

/**
 * Formats the start and end date of a period into a textual representation.
 * Example output: "1 Jan - 3 Jan"
 */
export const formatTimePeriod = (
  currentDate: Date,
  periodRageInDays: number,
) => {
  const startDate = subDays(currentDate, periodRageInDays - 1);
  return `${formatDateToText(startDate)} - ${formatDateToText(currentDate)}`;
};
