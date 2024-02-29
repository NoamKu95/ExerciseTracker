import {TimePeriod} from '../models/timePeriod';
import i18n from '../translations/i18n';
import {
  generateTimePeriod,
  getNowTimestamp,
  getXDaysAgoTimestamp,
} from '../utils/dateUtil';

export const timePeriodsForFiltering: TimePeriod[] = [
  {
    name: i18n.t('times.last7Days'),
    startTime: getXDaysAgoTimestamp(7),
    endTime: getNowTimestamp(),
  },
  {
    name: i18n.t('times.last2Weeks'),
    startTime: getXDaysAgoTimestamp(14),
    endTime: getNowTimestamp(),
  },
  {
    name: i18n.t('times.lastMonth'),
    startTime: getXDaysAgoTimestamp(30),
    endTime: getNowTimestamp(),
  },
];

export const progressPeriods: TimePeriod[] = [
  generateTimePeriod(i18n.t('times.last30Days'), 30),
  generateTimePeriod(i18n.t('times.last90Days'), 90),
  generateTimePeriod(i18n.t('times.last180Days'), 180),
];
