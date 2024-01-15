import {TimePeriod} from '../models/timePeriod';
import i18n from '../translations/i18n';
import {getNowTimestamp, getXDaysAgoTimestamp} from '../utils/dateUtil';

export const defaultTimePeriods: TimePeriod[] = [
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
    startTime: new Date(), // TODO - define what last month is
    endTime: getNowTimestamp(),
  },
];
