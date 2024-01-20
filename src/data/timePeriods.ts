import {TimePeriod} from '../models/timePeriod';
import i18n from '../translations/i18n';
import {getNowTimestamp, getXDaysAgoTimestamp} from '../utils/dateUtil';

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
