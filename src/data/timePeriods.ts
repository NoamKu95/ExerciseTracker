import {subDays} from 'date-fns';
// Constants
import i18n from '../translations/i18n';
// Models
import {TimePeriod} from '../models/timePeriod';
// Utils
import {generateTimePeriod} from '../utils/dateUtil';

export const timePeriodsForFiltering: TimePeriod[] = [
  {
    name: i18n.t('times.last7Days'),
    amountOfDays: 7,
    startDate: subDays(new Date(), 7),
    endDate: new Date(),
  },
  {
    name: i18n.t('times.last2Weeks'),
    amountOfDays: 14,
    startDate: subDays(new Date(), 14),
    endDate: new Date(),
  },
  {
    name: i18n.t('times.lastMonth'),
    amountOfDays: 30,
    startDate: subDays(new Date(), 30),
    endDate: new Date(),
  },
];

export const progressPeriods: TimePeriod[] = [
  generateTimePeriod(i18n.t('times.last30Days'), 30),
  generateTimePeriod(i18n.t('times.last90Days'), 90),
  generateTimePeriod(i18n.t('times.last180Days'), 180),
];
