import {format, isToday, subDays} from 'date-fns';
import i18n from '../translations/i18n';
import {TimePeriod} from '../models/timePeriod';

/**
 * Converts a Date object into a textual representation, such as "today" or "dd/MM/yy" format.
 **    Example -> input: ()  =>   output: ("29/01/24")
 */
export const formatDateToText = (date: Date) => {
  // eslint-disable-next-line curly
  if (isToday(date)) return i18n.t('common.today');
  return format(date, 'dd/MM/yy');
};

/**
 * Returns a textual representation of a period based on the current date and amount of days.
 * The text format varies depending on the length of the period.
 * Example -> input: ()   =>   output:
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
 * Formats the start & end dates of a period into a textual representation.
 **    Example -> input: ()   =>   output: ("30/12/23 - 28/1/24")
 */
export const formatTimePeriod = (
  currentDate: Date,
  periodRageInDays: number,
) => {
  const startDate = subDays(currentDate, periodRageInDays - 1);
  return `${formatDateToText(currentDate)} - ${formatDateToText(startDate)}`;
};
